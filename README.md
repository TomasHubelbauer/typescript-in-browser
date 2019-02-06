# TypeScript in the Browser

This repository is an experiment in running TypeScript in the browser.

It has two facets described below.

[**DEMO**](https://tomashubelbauer.github.io/typescript-in-browser/)

### Web Worker for On-The-Fly Transpilation

The page contains a script tag such as this:

```html
<script src="demo/index.ts"></script>
```

A web worker is registered and it intercepts all requests ending in `.ts`.
It invokes the TypeScript compiler and transpiles the responses on the fly.
The resulting JavaScript is passed to the browser and executed by it.

### In-Page User-Defined Code Transpilation

The page allows you to enter TypeScript and see the corresponding JavaScript.

How does it work?

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

- [ ] Split the on-the-fly logic into its own repository/demo
- [ ] Pull the on-the-fly transpiler out to its own library for use by other people
- [ ] Host a GitHub Pages demo of a TypeScript application running with the help of the service worker
- [ ] Make TSX work in the Monaco editor
