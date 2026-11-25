'use strict';
(() => {
  const $ = selector => document.querySelector(selector);
  const catalog = window.catalog;
  const {split, hasPreview, calculate} = window.formulaTools;
  const detail = $('#detail');
  const results = $('#results');
  const search = $('#query');
  const category = $('#category');
  const previewOnly = $('#preview-only');
  const byName = new Map(catalog.map(row => [row.name, row]));
  const drafts = new Map();
  let active;

  for (const name of [...new Set(catalog.map(row => row.category))].sort()) {
    category.add(new Option(name, name));
  }

  function synchronizeSelection() {
    for (const button of results.querySelectorAll('button')) {
      button.setAttribute('aria-current', String(button.dataset.name === active?.name));
    }
  }

  function showResults() {
    const terms = search.value.toLowerCase().trim().replace(/^=/,'').split(/\s+/);
    const rows = catalog.filter(row => {
      const searchable = [row.name, row.category, row.summary, row.version].join(' ').toLowerCase();
      return (!category.value || category.value === row.category) &&
        (!previewOnly.checked || hasPreview(row.name)) &&
        terms.every(term => searchable.includes(term));
    });
    $('#count').textContent = rows.length === catalog.length ? rows.length + ' functions' : rows.length + ' of ' + catalog.length + ' functions';
    const fragment = document.createDocumentFragment();
    for (const row of rows) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'result';
      button.dataset.name = row.name;
      const top = document.createElement('span');
      top.className = 'result-top';
      const label = document.createElement('strong');
      label.textContent = row.name;
      top.append(label);
      if (hasPreview(row.name)) {
        const pill = document.createElement('span');
        pill.className = 'pill';
        pill.textContent = 'Preview';
        top.append(pill);
      }
      const meta = document.createElement('small');
      meta.textContent = row.category;
      button.append(top, meta);
      fragment.append(button);
    }
    if (!rows.length) {
      const message = document.createElement('p');
      message.className = 'empty';
      message.textContent = 'No matching functions. Try a different name or clear a filter.';
      fragment.append(message);
    }
    results.replaceChildren(fragment);
    results.scrollTop = 0;
    synchronizeSelection();
  }

  function argumentSchema(syntax) {
    if (!syntax) return {fields:[{label:'Argument 1', optional:true}], repeat:['Argument'], generic:true};
    const body = syntax.slice(syntax.indexOf('(') + 1, syntax.lastIndexOf(')'));
    if (syntax.startsWith('MAP(')) {
      return {fields:[{label:'array1',optional:false},{label:'lambda',optional:false}], repeat:['array'], tail:true};
    }
    if (syntax.startsWith('LAMBDA(')) {
      return {fields:[{label:'calculation',optional:false}], repeat:['parameter'], tail:true};
    }
    const repeatMarker = /\.{2,}|…/.test(body);
    const fields = [];
    let depth = 0;
    let word = '';
    let optional = false;
    let group = [];
    let lastGroup = [];
    const flush = () => {
      const label = word.trim().replace(/^[, ]+|[, ]+$/g,'');
      if (label && !/^[.…]+$/.test(label)) {
        const field = {label, optional};
        fields.push(field);
        if (optional) group.push(label);
      }
      word = '';
      optional = depth > 0;
    };
    for (const char of body) {
      if (char === '[') {
        if (word.trim()) flush();
        if (!depth) group = [];
        depth++;
        optional = true;
      } else if (char === ']') {
        flush();
        depth = Math.max(0,depth - 1);
        if (!depth && group.length) lastGroup = group;
        optional = depth > 0;
      } else if (char === ',' || char === ';') {
        flush();
      } else {
        word += char;
      }
    }
    flush();
    const repeat = repeatMarker ? (lastGroup.length ? lastGroup : [fields.at(-1)?.label ?? 'Argument']) : [];
    return {fields, repeat, generic:false};
  }

  function showDetail(row, focus = false) {
    active = row;
    synchronizeSelection();
    const schema = argumentSchema(row.syntax);
    const supported = hasPreview(row.name);
    const values = drafts.get(row.name) ?? [];
    drafts.set(row.name, values);
    detail.replaceChildren($('#detail-template').content.cloneNode(true));
    $('#function-name').textContent = row.name;
    $('[data-category]').textContent = row.category;
    $('[data-version]').textContent = row.version ? (row.version === 'Microsoft 365' ? row.version : 'Excel ' + row.version + '+') : '';
    $('[data-version]').hidden = !row.version;
    $('#description').textContent = [row.summary,row.note].filter(Boolean).join(' ');
    $('#docs').href = row.url;
    $('#syntax').textContent = row.syntax ? '=' + row.syntax : 'See Microsoft documentation for the argument order.';
    $('#example-block').hidden = !row.example;
    $('#example').textContent = row.example;
    const badge = $('#preview-badge');
    badge.textContent = supported ? 'Local preview' : 'Excel calculation';
    badge.classList.toggle('unavailable', !supported);
    $('#builder-help').textContent = schema.generic
      ? 'Enter arguments in the order shown in Microsoft’s documentation. Use double quotes around text.'
      : 'Enter Excel arguments as written in a formula. Use double quotes around text, or enter a reference such as A2:A10.';
    const form = $('#formula-form');
    const output = $('#calculation');
    const formula = $('#formula');
    const copy = $('#copy');
    const copyStatus = $('#copy-status');
    const add = $('#add');
    const remove = $('#remove');
    let fieldCount = Math.max(schema.fields.length, values.length);

    function update() {
      const inputs = Array.from({length:fieldCount},(_,i) => values[i]?.trim() ?? '');
      const args = schema.tail ? inputs.filter(Boolean) : inputs.slice();
      while (args.length && !args.at(-1)) args.pop();
      formula.value = '=' + row.name + '(' + args.join(', ') + ')';
      const missing = schema.fields.some((field,i) => {
        const index = schema.tail && i === schema.fields.length - 1 ? fieldCount - 1 : i;
        return !field.optional && !inputs[index];
      });
      copy.disabled = missing;
      copyStatus.textContent = '';
      output.classList.remove('calculated');
      if (!supported) {
        output.textContent = 'Preview unavailable. Copy your formula to Excel to calculate it.';
      } else if (missing) {
        output.textContent = 'Fill the required arguments to see a result.';
      } else {
        try {
          output.textContent = calculate(row.name,args);
          output.classList.add('calculated');
        } catch (error) {
          output.textContent = error.message;
        }
      }
    }

    function renderFields() {
      const fields = $('#arguments');
      fields.replaceChildren();
      for (let i = 0; i < fieldCount; i++) {
        const offset = i - schema.fields.length + (schema.tail ? 1 : 0);
        const baseField = schema.tail && i === fieldCount - 1 ? schema.fields.at(-1) :
          schema.tail && offset >= 0 ? undefined : schema.fields[i];
        const field = baseField ?? {
          label: schema.generic ? 'Argument ' + (i+1) :
            schema.repeat[offset % schema.repeat.length]?.replace(/\d+$/, '') + ' (argument ' + (i+1) + ')',
          optional:true
        };
        const label = document.createElement('label');
        label.className = 'argument';
        label.append(document.createTextNode(field.label));
        const input = document.createElement('input');
        input.type = 'text';
        input.spellcheck = false;
        input.autocomplete = 'off';
        input.maxLength = 8192;
        input.value = values[i] ?? '';
        input.required = !field.optional;
        const meta = document.createElement('small');
        meta.textContent = field.optional ? 'Optional' : 'Required';
        label.append(input,meta);
        input.addEventListener('input', () => {
          values[i] = input.value;
          update();
        });
        fields.append(label);
      }
      add.hidden = !schema.repeat.length;
      add.disabled = fieldCount + schema.repeat.length > 254;
      remove.hidden = fieldCount <= schema.fields.length;
      update();
    }

    add.addEventListener('click', () => {
      const firstAdded = fieldCount - (schema.tail ? 1 : 0);
      if (schema.tail) {
        const tail = values[firstAdded] ?? '';
        values[firstAdded] = '';
        values[firstAdded + 1] = tail;
      }
      fieldCount += schema.repeat.length;
      renderFields();
      $('#arguments').children[firstAdded]?.querySelector('input').focus();
    });
    remove.addEventListener('click', () => {
      fieldCount = Math.max(schema.fields.length,fieldCount - schema.repeat.length);
      values.splice(schema.tail ? fieldCount - 1 : fieldCount, schema.repeat.length);
      renderFields();
      (remove.hidden || remove.disabled ? add : remove).focus();
    });
    form.addEventListener('submit', event => event.preventDefault());
    $('#load-example').addEventListener('click', () => {
      const body = row.example.slice(row.example.indexOf('(')+1, row.example.lastIndexOf(')'));
      values.splice(0,values.length,...(body ? split(body) : []));
      fieldCount = Math.max(schema.fields.length, values.length);
      renderFields();
      ($('#arguments input') ?? formula).focus();
    });
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(formula.value);
        copyStatus.textContent = 'Copied to clipboard.';
      } catch {
        formula.focus();
        formula.select();
        try {
          if (document.execCommand('copy')) {
            copyStatus.textContent = 'Copied to clipboard.';
            return;
          }
        } catch {}
        copyStatus.textContent = 'Formula selected. Press Ctrl+C or Command+C to copy.';
      }
    });
    renderFields();
    if (focus) $('#function-name').focus();
  }

  function openFromHash() {
    const name = location.hash.slice(1).toUpperCase();
    const row = byName.get(name);
    if (row && row !== active) showDetail(row);
  }

  results.addEventListener('click', event => {
    const button = event.target.closest('button[data-name]');
    if (!button) return;
    showDetail(byName.get(button.dataset.name),true);
    history.replaceState(null,'','#' + active.name);
  });
  search.addEventListener('input', showResults);
  search.addEventListener('keydown', event => {
    if (event.key === 'Enter') results.querySelector('button')?.focus();
  });
  category.addEventListener('change',showResults);
  previewOnly.addEventListener('change',showResults);
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !event.altKey && !event.ctrlKey && !event.metaKey &&
      !event.target.closest('input, textarea, select, [contenteditable]')) {
      event.preventDefault();
      search.focus();
    }
  });
  window.addEventListener('hashchange',openFromHash);
  showResults();
  openFromHash();
  if (!active) {
    drafts.set('SUM',['12','18','25']);
    showDetail(byName.get('SUM'));
  }
  const selected = results.querySelector('[aria-current="true"]');
  if (selected) results.scrollTop = Math.max(0,selected.offsetTop - results.offsetTop - 65);
})();
