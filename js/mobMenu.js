document.addEventListener('DOMContentLoaded', function() {
    const openMobile = document.querySelector('.mob-menu__open');
    const closeMobile = document.querySelector('.mob-menu__close');
    const mobile = document.querySelector('.mob-menu');

    openMobile.addEventListener('click', function(e) {
        e.preventDefault();
        mobile.classList.add('active');
    });

    closeMobile.addEventListener('click', function() {
        mobile.classList.remove('active');
    });

    // Добавляем обработчик для закрытия меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.mob-menu a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobile.classList.remove('active');
        });
    });
});