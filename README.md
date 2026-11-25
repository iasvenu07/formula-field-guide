# Formula Field Guide

A searchable, responsive reference for Excel worksheet functions. Search by name or purpose, filter by category, load an example, and fill in the argument fields to copy a formula.

## Run locally

Open `dist/index.html` in a current browser. There is no installation, build step, account, or internet connection required to use the catalog and builder. An internet connection is needed to follow the Microsoft documentation links.

You can also serve the `dist` folder with any static web server. For example, if you have Python installed, run `python -m http.server 8000 --directory dist` from this folder, then visit `http://localhost:8000`. If your browser restricts clipboard access for local files, the copy button selects the formula so you can copy it with Ctrl+C or Command+C.

## Catalog and preview

- The catalog contains 521 distinct names extracted from the 514 function rows in the [Microsoft alphabetical index](https://support.microsoft.com/en-us/excel/excel-functions-alphabetical) checked on November 25, 2026. Combined rows were split into separate functions and the source's BETA.INV spelling was corrected. This is a snapshot of the index.
- All entries have a syntax signature and a Microsoft documentation link. Some functions have additional signature forms described in Microsoft's documentation. Version labels reproduce the introduction markers shown in the index when present.
- 511 entries have loadable examples. Examples with ranges assume you have corresponding data in your Excel workbook. The examples may require the Excel version or service described in Microsoft’s documentation.
- 55 functions can preview supported literal inputs in your browser. Enter numbers such as `12` or `25%`, logical values such as `TRUE`, or text in double quotes such as `"North"`. The preview uses a fixed set of implementations and never runs the formula text as code. Workbook references, nested expressions, and some Excel coercions and edge cases require Excel.
- The builder uses English function names and commas. Excel installations with a different regional list separator may require adapting the pasted formula.

## Source

- `dist/index.html` contains the page structure and detail template.
- `dist/style.css` defines the visual design and responsive layout.
- `dist/catalog.js` contains the editable function data.
- `dist/app.js` renders the catalog and the formula builder.
- `dist/calculator.js` contains the local preview functions.

## Verify or refresh the catalog

Run `node tools/check.cjs` from the repository root to check catalog integrity, run the 55 local preview examples, and verify that unsupported input is rejected. The website needs no Node.js installation to run.

To refresh the catalog, download Microsoft's linked alphabetical index to `tools/index-source.html`, then run `pwsh -File tools/collect.ps1` to collect individual pages. Some documentation pages may refuse automated requests. The generator uses the maintained signatures and examples in `tools/` where available. Run `node tools/catalog.mjs` from the repository root, review the changes to `dist/catalog.js`, and rerun the checks. Update any documented counts and the check expectations if the catalog changes.
