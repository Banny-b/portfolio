// Функция для управления состоянием заголовка
function stickyHeader() {
    const header = document.getElementById("up");
    const stickyPoint = header.offsetTop;
    const mobileMenu = document.querySelector('.mob-menu');

    // Проверяем состояние меню
    if (mobileMenu.classList.contains('active')) {
        header.classList.remove("sticky");
    } else if (window.pageYOffset > stickyPoint) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Обработчик события прокрутки
window.onscroll = function() {
    stickyHeader();
};

// Обработчик клика для открытия мобильного меню
document.querySelector('.mob-menu__open').addEventListener('click', function() {
    document.getElementById("up").classList.remove('sticky'); // Убираем класс "sticky" при открытии меню
});

// Обработчик клика для закрытия мобильного меню
document.querySelector('.mob-menu__close').addEventListener('click', function() {
    const header = document.getElementById("up");
    const stickyPoint = header.offsetTop;

    // Принудительно добавляем класс "sticky", если скролл выше точки прилипания
    if (window.pageYOffset > stickyPoint) {
        header.classList.add('sticky');
    }
});
