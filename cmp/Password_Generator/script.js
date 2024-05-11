document.getElementById('generate').addEventListener('click', function() {
  var length = document.getElementById('length').value;
  var includeUppercase = document.getElementById('includeUppercase').checked;
  var includeNumbers = document.getElementById('includeNumbers').checked;
  var includeSymbols = document.getElementById('includeSymbols').checked;

  var password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById('password').textContent = password;
});

document.getElementById('copy').addEventListener('click', function() {
  var password = document.getElementById('password').textContent;
  copyToClipboard(password);
});

function generatePassword(length, uppercase, numbers, symbols) {
  var charset = 'abcdefghijklmnopqrstuvwxyz';
  var password = '';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) charset += '0123456789';
  if (symbols) charset += '!@#$%^&*()_+{}[]';

  for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
}

function copyToClipboard(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Password copied to clipboard');
}
