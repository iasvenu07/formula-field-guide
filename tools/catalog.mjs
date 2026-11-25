import fs from 'node:fs';

const index = 'https://support.microsoft.com/en-us/excel/excel-functions-alphabetical';
const html = fs.readFileSync('tools/index-source.html', 'utf8');
const docs = JSON.parse(fs.readFileSync('tools/docs.json', 'utf8').replace(/^\uFEFF/, ''));
const pages = new Map(docs.map(doc => [doc.link, doc.path]));
const examples = new Map(fs.readFileSync('tools/examples.txt','utf8').trim().split(/\r?\n/).flatMap(line => {
  const pipe = line.indexOf('|');
  return line.slice(0,pipe).split(' ').map(name => [name,'=' + name + '(' + line.slice(pipe+1).trim() + ')']);
}));
const signatures = new Map(fs.readFileSync('tools/signatures.txt','utf8').trim().split(/\r?\n/).flatMap(line => {
  const colon = line.indexOf(':');
  return line.slice(0,colon).split(' ').map(name => [name,name + '(' + line.slice(colon+1) + ')']);
}));
const curated = new Map(fs.readFileSync('tools/curated.txt','utf8').trim().split(/\r?\n/).map(line => {
  const [name, args, example, summary] = line.split('|');
  return [name, { syntax: name + '(' + args + ')', example: '=' + name + '(' + example + ')', summary }];
}));
const entities = {amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',hellip:'…',ndash:'–',rsquo:'’',lsquo:'‘',ldquo:'“',rdquo:'”'};
function plain(html) {
  return html.replace(/<br\s*\/?>/gi,' ').replace(/<[^>]*>/g,'')
    .replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (all, key) => {
      if (key[0] !== '#') return entities[key] ?? all;
      const n = key[1].toLowerCase() === 'x' ? parseInt(key.slice(2),16) : Number(key.slice(1));
      return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : all;
    }).replace(/\s+/g,' ').trim();
}
function summarize(raw) {
  const first = raw.replace(/\s*(?:Note:|This function is not available).*$/i,'').split(/\.\s+(?=[A-Z])/)[0];
  return first.replace(/^(Returns|Calculates|Converts|Changes|Tests|Finds|Rounds|Counts|Extracts|Computes|Generates|Checks|Combines|Compares|Applies|Uses|Searches|Looks|Retrieves|Estimates|Multiplies|Adds|Removes|Creates|Finds|Replaces|Splits|Wraps|Appends|Identifies|Translates)\b/i,
    (_,verb) => verb === 'Searches' ? 'Search' : /(?:Changes|Uses|Applies)$/.test(verb) ? ({Changes:'Change',Uses:'Use',Applies:'Apply'})[verb] : verb.replace(/(?:ches|shes|xes|ses)$|s$/, ending => ({ches:'ch',shes:'sh',xes:'x',ses:'s',s:''})[ending]))
    .replace(/^Return\b/,'Get')
    .replace(/^Get TRUE if /,'Check whether ')
    .replace(/^(?:Return|Get the) TRUE if /, 'Check whether ')
    .replace(/\bits arguments\b/g,'the supplied inputs')
    .replace(/[.;]+$/,'') + '.';
}
function fromDoc(link, name) {
  const file = pages.get(link);
  if (!file || !fs.existsSync(file)) return {};
  const source = fs.readFileSync(file, 'utf8');
  const article = source.split('class="learnArticleContent"')[1]?.split('</main>')[0] ?? '';
  const syntaxBlock = article.match(/<h[234]\b[^>]*>Syntax<\/h[234]>([\s\S]*?)(?=<h[234]\b|$)/i)?.[1];
  const escaped = name.replace(/\./g,'\\.');
  const call = new RegExp('(?:^|\\b)'+escaped+'\\s*\\([^()]*\\)', 'i');
  const syntax = syntaxBlock && (plain(syntaxBlock).match(call)?.[0] ?? '').replace(/^\w[\w.]*\s*\(/, name+'(');
  return {syntax: syntax || '', dataAvailable: Boolean(syntax)};
}
const entries = new Map();
const issues = [];
const tables = [...html.matchAll(/<table\b[^>]*>[\s\S]*?<\/table>/gi)].filter(([table]) => table.includes('Type and description'));
let functionRows = 0;
for (const [table] of tables) {
  for (const [row] of table.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi)) {
    const cells = Array.from(row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi), m => m[1]);
    if (!cells.length) continue;
    functionRows++;
    const anchors = [...cells[0].matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
    const raw = plain(cells[1]);
    const parsed = raw.match(/^([^:]+):\s*(.+)$/);
    let category = parsed?.[1] ?? '';
    if (/^(Lookup|Look and)/.test(category)) category = 'Lookup and reference';
    if (!anchors.length || !parsed) issues.push([plain(cells[0]),raw]);
    for (const [,link,label] of anchors) {
      const version = plain(cells[0]).match(/\((20\d\d|Microsoft 365)\)/i)?.[1] ?? '';
      const names = plain(label).replace(/BETA\.INVn/i,'BETA.INV').replace(/\s+functions?$/i,'').replace(/\s+(?:and|&)\s+/gi,',').split(/\s*[,/]\s*/);
      for (let name of names) {
        name = name.toUpperCase();
        if (!/^[A-Z][A-Z0-9.]*$/.test(name)) { issues.push([name,link]); continue; }
        const custom = curated.get(name);
        const fetched = fromDoc(link, name);
        const syntax = custom?.syntax || fetched.syntax || signatures.get(name) || '';
        entries.set(name,{name, category:category || 'Other', version, summary:custom?.summary || summarize(parsed?.[2] || raw), url:new URL(link,index).href,
          note:/not available in Excel for the web/i.test(raw) ? 'Unavailable in Excel for the web.' : '',
          syntax, example:custom?.example || examples.get(name) || ''});
      }
    }
  }
}
const rows = [...entries.values()].sort((a,b)=>a.name.localeCompare(b.name,'en'));
fs.writeFileSync('dist/catalog.js','// Catalog based on Microsoft Support’s alphabetical Excel function index.\nwindow.catalog = '+JSON.stringify(rows,null,2)+';\n');
console.log({functionRows, total:rows.length, syntax:rows.filter(r=>r.syntax).length, examples:rows.filter(r=>r.example).length, issues, categories:[...new Set(rows.map(r=>r.category))]});

