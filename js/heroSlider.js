const items = document.querySelectorAll('.hero__item');
let currentItemIndex = 0;

function showNextItem() {
    items[currentItemIndex].classList.remove('active');
    currentItemIndex = (currentItemIndex + 1) % items.length;
    items[currentItemIndex].classList.add('active');
};

setInterval(showNextItem, 5000);
