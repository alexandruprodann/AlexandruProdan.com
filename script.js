const toggleButton = document.querySelector('.toggle-btn');
const navbarLinks = document.querySelector('.navbar .links');
const menuIcons = document.querySelectorAll('.toggle-btn i');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

toggleButton.addEventListener('click', () => {
    menuIcons.forEach(icon => {
        icon.classList.toggle('active');
    });
});

const phrases = [
    "QA Automation Tester",
    "Tech Enthusiast",
    "Problem Solver",
    "Human"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typewriterElement = document.querySelector('.typewriter');

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typewriterElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(deletePhrase, 1500); // Wait before deleting the phrase
    }
}

function deletePhrase() {
    if (currentCharIndex > 0) {
        typewriterElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(deletePhrase, 50); // Adjust deleting speed here
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(type, 500); // Wait before typing the next phrase
    }
}

// Start the typewriter effect
type();