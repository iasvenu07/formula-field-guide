'use strict';
(() => {
  const numberPattern = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?%?$/i;
  function literal(source) {
    const raw = source.trim();
    if (numberPattern.test(raw)) {
      const value = raw.endsWith('%') ? Number(raw.slice(0, -1)) / 100 : Number(raw);
      if (Number.isFinite(value)) return value;
    }
    if (/^(TRUE|FALSE)$/i.test(raw)) return raw.toUpperCase() === 'TRUE';
    if (/^"(?:[^"]|"")*"$/.test(raw)) return raw.slice(1, -1).replace(/""/g, '"');
    if (!raw) return undefined;
    throw Error('Use literal numbers, TRUE or FALSE, or text in double quotes. Cell references and expressions calculate in Excel.');
  }
  function split(source) {
    const values = [];
    let quoted = false;
    let singleQuoted = false;
    let depth = 0;
    let start = 0;
    for (let i = 0; i < source.length; i++) {
      const char = source[i];
      if (char === '"' && !singleQuoted) quoted = !quoted;
      if (char === "'" && !quoted) singleQuoted = !singleQuoted;
      if (quoted || singleQuoted) continue;
      if ('([{'.includes(char)) depth++;
      if (')]}'.includes(char)) depth--;
      if (char === ',' && depth === 0) {
        values.push(source.slice(start, i).trim());
        start = i + 1;
      }
    }
    values.push(source.slice(start).trim());
    return values;
  }
  function numeric(value) {
    if (typeof value === 'number') return value;
    throw Error('This preview expects a number in the numeric fields.');
  }
  function boolean(value) {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') return value !== 0;
    throw Error('Use TRUE, FALSE, or a number for logical inputs.');
  }
  function string(value) {
    if (typeof value === 'string') return value;
    if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
    if (typeof value === 'number') return String(value);
    throw Error('Enter a text value in double quotes, such as "North".');
  }
  function integer(value, fallback) {
    return value === undefined && fallback !== undefined ? fallback : Math.trunc(numeric(value));
  }
  function nonnegative(value, fallback) {
    const n = integer(value, fallback);
    if (n < 0) throw Error('Use a nonnegative number of characters.');
    return n;
  }
  function round(value, digits, operation) {
    const places = integer(digits);
    if (Math.abs(places) > 100) throw Error('Preview supports digit counts between -100 and 100.');
    const [coefficient, exponent = '0'] = Math.abs(numeric(value)).toString().split('e');
    const scaled = Number(coefficient + 'e' + (Number(exponent) + places));
    const [rounded, roundedExponent = '0'] = operation(scaled).toString().split('e');
    return Math.sign(value) * Number(rounded + 'e' + (Number(roundedExponent) - places));
  }
  const sum = values => values.reduce((total, value) => total + value, 0);
  const numbers = values => values.map(numeric);
  const variance = (values, correction) => {
    const ns = numbers(values);
    const mean = sum(ns) / ns.length;
    if (ns.length <= correction) throw Error('#DIV/0! — Enter more values.');
    return sum(ns.map(value => (value - mean) ** 2)) / (ns.length - correction);
  };
  const calculators = {
    SUM: (...v) => sum(numbers(v)),
    PRODUCT: (...v) => numbers(v).reduce((product,value) => product * value, 1),
    AVERAGE: (...v) => sum(numbers(v)) / v.length,
    MIN: (...v) => Math.min(...numbers(v)),
    MAX: (...v) => Math.max(...numbers(v)),
    COUNT: (...v) => v.filter(value => typeof value === 'number' || typeof value === 'boolean' ||
      (typeof value === 'string' && numberPattern.test(value.trim()))).length,
    COUNTA: (...v) => v.filter(value => value !== undefined).length,
    MEDIAN: (...v) => {
      const ordered = numbers(v).sort((a,b) => a - b);
      const middle = Math.floor(ordered.length / 2);
      return ordered.length % 2 ? ordered[middle] : (ordered[middle - 1] + ordered[middle]) / 2;
    },
    'VAR.S': (...v) => variance(v, 1),
    'VAR.P': (...v) => variance(v, 0),
    'STDEV.S': (...v) => Math.sqrt(variance(v, 1)),
    'STDEV.P': (...v) => Math.sqrt(variance(v, 0)),
    ABS: x => Math.abs(numeric(x)),
    SQRT: x => Math.sqrt(numeric(x)),
    SIGN: x => Math.sign(numeric(x)),
    POWER: (x,p) => numeric(x) ** numeric(p),
    MOD: (x,y) => numeric(x) - numeric(y) * Math.floor(x / y),
    QUOTIENT: (x,y) => Math.trunc(numeric(x) / numeric(y)),
    INT: x => Math.floor(numeric(x)),
    TRUNC: (x,d = 0) => round(x,d,Math.floor),
    ROUND: (x,d) => round(x,d,Math.round),
    ROUNDDOWN: (x,d) => round(x,d,Math.floor),
    ROUNDUP: (x,d) => round(x,d,Math.ceil),
    PI: () => Math.PI,
    SIN: x => Math.sin(numeric(x)),
    COS: x => Math.cos(numeric(x)),
    TAN: x => Math.tan(numeric(x)),
    RADIANS: x => numeric(x) * Math.PI / 180,
    DEGREES: x => numeric(x) * 180 / Math.PI,
    EXP: x => Math.exp(numeric(x)),
    LN: x => Math.log(numeric(x)),
    LOG10: x => Math.log10(numeric(x)),
    LOG: (x,b = 10) => Math.log(numeric(x)) / Math.log(numeric(b)),
    AND: (...v) => v.map(boolean).every(Boolean),
    OR: (...v) => v.map(boolean).some(Boolean),
    NOT: x => !boolean(x),
    IF: (test, yes, no = false) => boolean(test) ? yes : no,
    TRUE: () => true,
    FALSE: () => false,
    ISNUMBER: x => typeof x === 'number',
    ISTEXT: x => typeof x === 'string',
    ISLOGICAL: x => typeof x === 'boolean',
    LEN: x => [...string(x)].length,
    UPPER: x => string(x).toUpperCase(),
    LOWER: x => string(x).toLowerCase(),
    TRIM: x => string(x).replace(/^ +| +$/g,'').replace(/ +/g,' '),
    LEFT: (x,n) => [...string(x)].slice(0,nonnegative(n,1)).join(''),
    RIGHT: (x,n) => {
      const size = nonnegative(n,1);
      return size ? [...string(x)].slice(-size).join('') : '';
    },
    MID: (x,start,n) => {
      const i = integer(start) - 1;
      if (i < 0) throw Error('The start position must be at least 1.');
      return [...string(x)].slice(i,i + nonnegative(n)).join('');
    },
    CONCAT: (...v) => v.map(value => value === undefined ? '' : string(value)).join(''),
    CONCATENATE: (...v) => v.map(value => value === undefined ? '' : string(value)).join(''),
    EXACT: (x,y) => string(x) === string(y),
    TEXTJOIN: (delimiter,ignore,...v) => v.map(value => value === undefined ? '' : string(value))
      .filter(value => value !== '' || !boolean(ignore)).join(string(delimiter)),
    REPT: (x,n) => {
      const size = nonnegative(n);
      if (size > 32767 || size * string(x).length > 32767) throw Error('The repeated text exceeds the preview limit.');
      return string(x).repeat(size);
    },
    CHOOSE: (index,...v) => {
      const i = integer(index);
      if (i < 1 || i > v.length) throw Error('Enter an index within the supplied choices.');
      return v[i - 1] ?? 0;
    }
  };
  const hasPreview = name => Object.hasOwn(calculators,name);
  function calculate(name, raw) {
    if (!hasPreview(name)) throw Error('This function calculates in Excel.');
    const result = calculators[name](...raw.map(literal));
    if (typeof result === 'number') {
      if (!Number.isFinite(result)) throw Error('#NUM! or #DIV/0! — The calculation has no finite result.');
      return String(Number(result.toPrecision(15)));
    }
    if (result === '') return '"" (empty text)';
    return string(result);
  }
  window.formulaTools = {split, hasPreview, calculate};
})();
