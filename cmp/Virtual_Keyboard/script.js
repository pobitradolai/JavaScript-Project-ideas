const keyboardLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', '', '', ''],
  ['CapsLock', 'Backspace']
];

let capsLockEnabled = false;

const textInput = document.getElementById('textInput');
const keyboard = document.getElementById('keyboard');

// Generate keyboard keys
keyboardLayout.forEach(row => {
  const rowElement = document.createElement('div');
  rowElement.classList.add('keyboard-row');
  row.forEach(key => {
      const keyElement = document.createElement('div');
      keyElement.classList.add('key');
      keyElement.textContent = key;
      keyElement.addEventListener('click', () => {
          handleKeyPress(key);
      });
      rowElement.appendChild(keyElement);
  });
  keyboard.appendChild(rowElement);
});

function handleKeyPress(key) {
  switch (key) {
      case 'CapsLock':
          capsLockEnabled = !capsLockEnabled;
          updateKeyboard();
          break;
      case 'Backspace':
          textInput.value = textInput.value.slice(0, -1);
          break;
      default:
          textInput.value += capsLockEnabled ? key.toUpperCase() : key.toLowerCase();
          break;
  }
}

function updateKeyboard() {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
      if (key.textContent.length === 1) {
          key.textContent = capsLockEnabled ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
  });
}
