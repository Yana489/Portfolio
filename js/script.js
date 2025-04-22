// Function to animate welcome letters
const animateWelcomeLetters = () => {
    const welcomeLetters = document.querySelectorAll('.header__welcome span');
    welcomeLetters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.4}s`;
    });
};

// Function to change the URL language
const changeURLLanguage = (language) => {
    location.href = `${window.location.pathname}#${language}`;
    location.reload();
};

// Function to update the language of the page
const updateLanguage = (hash) => {
    if (!allLanguages.includes(hash)) {
        location.href = `${window.location.pathname}#de`;
        return;
    }
    for (let key in langArr) {
        const elem = document.querySelector(`.lng-${key}`);
        if (elem) {
            if (key === 'header__welcome') {
                updateWelcomeText(elem, langArr[key][hash]);
            } else {
                elem.innerHTML = langArr[key][hash];
            }
        }
    }
};

// Function to update the welcome text with animation
const updateWelcomeText = (elem, text) => {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.2}s`;
        elem.appendChild(span);
    });
};

// Function to handle language change
const changeLanguage = () => {
    const hash = window.location.hash.substring(1) || 'de';
    updateLanguage(hash);
};

// Function to initialize the fullscreen overlay for project images
const initializeFullscreenOverlay = () => {
    const projectImages = document.querySelectorAll('.project-img');
    const overlay = document.createElement('div');
    overlay.classList.add('fullscreen-overlay');
    document.body.appendChild(overlay);

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            const imgUrl = img.style.backgroundImage.slice(5, -2);
            overlay.innerHTML = `<img src="${imgUrl}" alt="Fullscreen Image">`;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        overlay.innerHTML = '';
    });
};

// Event listeners
window.addEventListener('load', animateWelcomeLetters);

const buttons = document.querySelectorAll('.language-button');
const allLanguages = ["de", "en"];

buttons.forEach(button => {
    button.addEventListener('click', () => changeURLLanguage(button.id));
});
document.addEventListener('DOMContentLoaded', initializeFullscreenOverlay);

// Initial language setup
changeLanguage();
