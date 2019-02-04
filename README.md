# TypeScript in the Browser

This repository is an experiment in running TypeScript in the browser.

[**DEMO**](https://tomashubelbauer.github.io/typescript-in-browser/)

1. Refer to `typescript.js` (`typescript/lib/`) in some way (CDN, `node_modules`)
2. Find the `TypeScript` and `ts` objects on `window`
3. [Use the TypeScript API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

This demo transpiles TypeScript source text to JavaScript source text based on the
[demo in the TypeScript wiki](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#transpiling-a-single-file).

```js
const { outputText, diagnostics, sourceMapText } = ts.transpileModule('const x: number = 5;', { compilerOptions: { target: 'esnext' } });
```

- [ ] Integrate a web worker which intercepts requests and serves transpiled sources
  - There should be a tool repo which has the web worker logic and a demo repo which is TypeScript running in GitHub Pages
  - This repo should stay as a PoC repo
- [ ] Integrate Monaco Editor for TypeScript editor and JavaScript viewer
