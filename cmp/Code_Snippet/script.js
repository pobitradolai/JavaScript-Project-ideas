const codeInput = document.getElementById('codeInput');
const codeOutput = document.getElementById('codeOutput');

codeInput.addEventListener('input', highlightCode);

function highlightCode() {
  const code = codeInput.value;
  const highlightedCode = syntaxHighlight(code);
  codeOutput.innerHTML = highlightedCode;
}

function syntaxHighlight(code) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };
  return code.replace(/[&<>]/g, (entity) => htmlEntities[entity] || entity);
}
