const assert = require('node:assert/strict');
global.window = {};
const base = '../dist/';
require(base + 'catalog.js');
require(base + 'calculator.js');
const {catalog, formulaTools: t} = window;
assert.equal(catalog.length, 521);
assert.equal(new Set(catalog.map(x => x.name)).size, catalog.length);
assert.equal(catalog.filter(x => x.example).length, 511);
assert.equal(new Set(catalog.map(x => x.category)).size, 14);
for (const row of catalog) {
  assert.ok(row.syntax.startsWith(row.name + '('), row.name);
  assert.equal(new URL(row.url).hostname, 'support.microsoft.com');
  if (row.example) assert.ok(row.example.startsWith('=' + row.name + '('), row.name);
  if (t.hasPreview(row.name)) {
    const example = row.example.slice(row.example.indexOf('(') + 1,-1);
    assert.equal(typeof t.calculate(row.name, example ? t.split(example) : []), 'string');
  }
}
assert.deepEqual(t.split('A2, "red, blue", DATE(2025,1,1), {1,2}, \'Other, sheet\'!B3'),
  ['A2','"red, blue"','DATE(2025,1,1)','{1,2}',"'Other, sheet'!B3"]);
assert.equal(t.calculate('SUM',['12','18','25']),'55');
assert.equal(t.calculate('ROUND',['-1.005','2']),'-1.01');
assert.equal(t.calculate('LEFT',['"hello"','0']),'"" (empty text)');
assert.equal(t.calculate('TEXTJOIN',['", "','TRUE','"red"','""','"blue"']),'red, blue');
assert.equal(t.calculate('IF',['FALSE','"Pass"','"Review"']),'Review');
assert.throws(() => t.calculate('XLOOKUP',['1']), /in Excel/);
assert.throws(() => t.calculate('SUM',['A2:A4']), /references/);
assert.throws(() => t.calculate('SUM',['alert(1)']), /literal/);
assert.throws(() => t.calculate('REPT',['"a"','100000000']), /limit/);
console.log('Catalog integrity and 55 preview examples passed, including calculation and input-limit checks.');

