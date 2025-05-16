const flashcard = document.getElementById('flashcard');


let currentIndex = 0;

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});
