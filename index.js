window.addEventListener('load', async _ => {
  try {
    await navigator.serviceWorker.register('worker.js');
    console.log('Registered web worker for transpilation.');
  } catch (error) {
    debugger;
    alert('Error registering a service worker.');
  }

  const inputEditor = monaco.editor.create(document.querySelector('#inputMonacoEditor'), { value: '', language: 'typescript' });
  const outputEditor = monaco.editor.create(document.querySelector('#outputMonacoEditor'), { value: '', language: 'javascript', readOnly: true });
  const timeP = document.querySelector('#timeP');

  inputEditor.onDidChangeModelContent(_event => {
    const t = performance.now();
    outputEditor.setValue(ts.transpileModule(inputEditor.getValue(), { compilerOptions: { target: 'esnext' } }).outputText);
    timeP.textContent = `The transpilation took ${Math.round(performance.now() - t)} ms.`;
  });
});
