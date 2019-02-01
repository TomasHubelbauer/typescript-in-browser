window.addEventListener('load', _ => {
  const inputTextArea = document.querySelector('#inputTextArea');
  const outputTextArea = document.querySelector('#outputTextArea');
  const timeP = document.querySelector('#timeP');

  inputTextArea.addEventListener('input', event => {
    const t = performance.now();
    outputTextArea.value = ts.transpileModule(event.currentTarget.value, { compilerOptions: { target: 'esnext' } }).outputText
    timeP.textContent = `The transpilation took ${performance.now() - t} ms.`;
  });
});
