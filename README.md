# TypeScript in the Browser

This repository is an experiment in transpiling TypeScript in the browser.

[**DEMO**](https://tomashubelbauer.github.io/typescript-in-browser)

How does it work?

1. The page loads `typescript.js` (`typescript/lib/`) in some way (CDN, `node_modules`)
2. The page has the `TypeScript` and `ts` objects available on `window`
3. The [TypeScript API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API) can be used
4. This demo transpiles TypeScript source text to JavaScript source text based on the
   [demo in the TypeScript wiki](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#transpiling-a-single-file)

```js
const { outputText, diagnostics, sourceMapText } = ts.transpileModule('const x: number = 5;', { compilerOptions: { target: 'esnext' } });
```

## Running

Remotely, [**see the online demo**](https://tomashubelbauer.github.io/typescript-in-browser)

Locally, run `index.html`

## To-Do

### Make TSX work in the Monaco editor

### Add TS compiler options controls: types, target etc.

Investigate how loading typings could work
