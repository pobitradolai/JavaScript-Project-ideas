const storyContainer = document.getElementById('story');
const optionsContainer = document.getElementById('options');

// Define your story data
const storyData = [
    {
        id: 1,
        text: "You wake up in a mysterious forest. Do you...",
        options: [
            { text: "Explore deeper into the forest", nextId: 2 },
            { text: "Head back the way you came", nextId: 3 }
        ]
    },
    {
        id: 2,
        text: "You encounter a magical creature. Do you...",
        options: [
            { text: "Try to communicate with it", nextId: 4 },
            { text: "Run away in fear", nextId: 5 }
        ]
    },
    {
        id: 3,
        text: "You find your way back to civilization. The end.",
        options: []
    },
    {
        id: 4,
        text: "The creature welcomes you and offers guidance. The end.",
        options: []
    },
    {
        id: 5,
        text: "You trip and fall, knocking yourself unconscious. The end.",
        options: []
    }
];

// Function to display a story segment and its options
function displayStory(id) {
    const storySegment = storyData.find(segment => segment.id === id);
    storyContainer.innerHTML = `<p>${storySegment.text}</p>`;
    optionsContainer.innerHTML = '';
    storySegment.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('button');
        button.innerText = option.text;
        button.addEventListener('click', () => {
            displayStory(option.nextId);
        });
        optionsContainer.appendChild(button);
    });
}

// Start the story
displayStory(1);
