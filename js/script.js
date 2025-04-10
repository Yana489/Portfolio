window.addEventListener('load', () => {
    const welcomeLetters = document.querySelectorAll('.header__welcome span');
    welcomeLetters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`;
    });
});