window.addEventListener('load', async _ => {
  const inputEditor = monaco.editor.create(document.querySelector('#inputMonacoEditor'), { value: '', language: 'typescript' });
  const outputEditor = monaco.editor.create(document.querySelector('#outputMonacoEditor'), { value: '', language: 'javascript', readOnly: true });
  const timeP = document.querySelector('#timeP');

  inputEditor.onDidChangeModelContent(_event => {
    const t = performance.now();
    outputEditor.setValue(ts.transpileModule(inputEditor.getValue(), { compilerOptions: { target: 'esnext', jsx: 'react' } }).outputText);
    timeP.textContent = `The transpilation took ${Math.round(performance.now() - t)} ms.`;
  });
});
