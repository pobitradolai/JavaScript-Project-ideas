const prompts = [
  "Write a story about a time traveler who accidentally changes history.",
  "Describe your ideal utopian society.",
  "Write a poem about the night sky.",
  "Create a character who can control elements with their mind.",
  "Describe a futuristic cityscape.",
  "Write a dialogue between a human and an alien.",
  "Describe a magical object and its powers.",
  "Write about a journey to the center of the Earth.",
  "Describe the life of a sentient robot.",
  "Write a scene set in a post-apocalyptic world."
];

function generatePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  const prompt = prompts[randomIndex];
  document.getElementById("promptDisplay").innerText = prompt;
}

document.getElementById("generateBtn").addEventListener("click", generatePrompt);
