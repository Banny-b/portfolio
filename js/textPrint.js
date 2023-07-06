const professionElement = document.getElementById('about__profess');
professionElement.style.whiteSpace = 'pre';

function animateText() {
    const text = 'Front-end developer';
    let currentIndex = 0;
    professionElement.innerText = '';

    function typeNextCharacter() {
        if (currentIndex < text.length) {
        professionElement.innerText += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeNextCharacter, 250);
        } else {
        setInterval(toggleCursor, 500);
        }
    }

    function toggleCursor() {
        const lastCharacterIndex = professionElement.innerText.length - 1;
        const lastCharacter = professionElement.innerText.charAt(lastCharacterIndex);

        if (lastCharacter === '|') {
        professionElement.innerText = professionElement.innerText.slice(0, lastCharacterIndex);
        } else {
        professionElement.innerText += '|';
        }
    }

    typeNextCharacter();
};

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= 400) {
    window.removeEventListener('scroll', handleScroll);

    animateText();
    }
};

if (window.innerHeight <= 400) {
professionElement.textContent = 'Front-end developer';
} else {
    window.addEventListener('scroll', handleScroll);
};
