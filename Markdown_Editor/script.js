document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('markdown-input');
  const preview = document.getElementById('preview');

  input.addEventListener('input', function() {
    const markdown = input.value;
    const html = marked(markdown);
    preview.innerHTML = html;
  });
});
