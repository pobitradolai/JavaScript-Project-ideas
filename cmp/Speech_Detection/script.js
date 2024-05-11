// Initialize SpeechRecognition object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Set recognition settings
recognition.lang = 'en-US';

// When speech recognition starts
recognition.onstart = function() {
  console.log('Voice recognition started. Speak into the microphone.');
};

// When speech recognition ends
recognition.onend = function() {
  console.log('Speech recognition ended.');
};

// When speech is recognized
recognition.onresult = function(event) {
  const speechResult = event.results[0][0].transcript;
  document.getElementById('speechResult').textContent = speechResult;
};

// When error occurs
recognition.onerror = function(event) {
  console.error('Speech recognition error occurred:', event.error);
};

// Add event listener to start button
document.getElementById('startButton').addEventListener('click', function() {
  recognition.start();
});
