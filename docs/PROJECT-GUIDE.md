# Formula Field Guide

## Use the website

Open the [hosted guide](https://formula-field-guide-excel.sturdylorikeet8.chatgpt.site/) with the ChatGPT account that has access, or clone this repository and open `dist/index.html` in a browser. The local copy needs no installation or build step.

1. Search by function name or purpose. Use the category menu or the **Can preview** filter to narrow the results.
2. Select a function to see its syntax, example where available, version marker, and Microsoft documentation.
3. Select **Use example** or enter your own arguments. Use double quotes around text, such as `"North"`. Enter references such as `A2:A10` directly in a field.
4. Select **Copy formula**, then paste it into an Excel cell. If the browser blocks clipboard access, the builder selects the formula for manual copying.

### Try these examples

| Task | Formula | How it works |
| --- | --- | --- |
| Add three amounts | `=SUM(12, 18, 25)` | The local preview displays 55. |
| Choose a label | `=IF(TRUE, "Pass", "Review")` | The local preview displays Pass. |
| Join text with a separator | `=TEXTJOIN(", ", TRUE, "Red", "Blue")` | The local preview displays Red, Blue. |
| Look up a worksheet value | `=XLOOKUP("Pen", A2:A20, D2:D20, "Missing")` | Excel searches column A and returns the matching value from column D. |

## Coverage and compatibility

The catalog is a snapshot of 521 distinct names in the [Microsoft Excel alphabetical index](https://support.microsoft.com/en-us/excel/excel-functions-alphabetical), checked on November 25, 2026. It includes 511 loadable examples. Version markers come from the index where available. Check each Microsoft documentation link for platform restrictions and alternate syntax.

Local previews support 55 functions with literal numbers, percentages, logical values, and quoted text. They use fixed implementations in the browser. Workbook references, nested formulas, and Excel-specific edge cases require Excel. The builder uses English function names and comma separators. Regional settings may require a different list separator.

## Maintain and verify the project

| Path | Purpose |
| --- | --- |
| `dist/index.html` and `dist/style.css` | Page structure and responsive styling |
| `dist/app.js` | Catalog search, filters, detail view, and formula builder |
| `dist/calculator.js` | Literal parsing and local previews |
| `dist/catalog.js` | Function records loaded by the site |
| `tools/` | Catalog refresh scripts, maintained signatures and examples, and verification |

From the repository root, run:

```sh
node --check dist/app.js
node --check dist/calculator.js
node tools/check.cjs
```

To refresh the catalog, save the Microsoft alphabetical index as `tools/index-source.html`. Run `pwsh -File tools/collect.ps1` to fetch function pages, then `node tools/catalog.mjs` to regenerate the catalog. Some Microsoft pages block automated downloads. Review the generated changes and update the counts in the documentation and verification script when the catalog changes. Keep downloaded source pages out of commits.

After changing the interface, open the site at desktop and narrow widths. Search for SUM, load the example, change a value, and confirm that the result and copied formula update. Then open XLOOKUP and confirm that the formula can be built while the site directs calculation to Excel.
