# TypeScript in the Browser

This repository is an experiment in transpiling TypeScript in the browser.

[**DEMO**](https://tomashubelbauer.github.io/typescript-in-browser/)

1. Refer to `typescript.js` (`typescript/lib/`) in some way (CDN, `node_modules`)
2. Find the `TypeScript` and `ts` objects on `window`
3. [Use the TypeScript API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

This demo transpiles TypeScript source text to JavaScript source text based on the
[demo in the TypeScript wiki](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#transpiling-a-single-file).

```js
const { outputText, diagnostics, sourceMapText } = ts.transpileModule('const x: number = 5;', { compilerOptions: { target: 'esnext' } });
```

## Running

Remotely, [**see the online demo**](https://tomashubelbauer.github.io/typescript-in-browser/)

Locally, run
```
npx serve

# Configure Firefox to allow web workers on HTTP
about:config
devtools.serviceWorkers.testing.enabled=true
firefox http://localhost:5000

# Refresh service worker in Firefox
about:debugging#workers

# Configure Chrome to allow web workers on HTTP
chrome http://localhost:5000 --user-data-dir . --unsafely-treat-insecure-origin-as-secure index.html

# Refresh service worker in Chrome
Developer Tools > Application > Service Workers > Update on reload
```

Watch out because:

- Firefox does not display `console.log`s from web workers nor does it support `debugger` in it
- Chrome does not support `fetch` in web workers and will freeze `view-source` URLs on `debugger`

## Contributing

- [ ] Move the service worker info to the library repository
- [ ] Make TSX work in the Monaco editor
- [ ] Add TS compiler options controls
