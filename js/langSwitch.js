document.addEventListener("DOMContentLoaded", function () {
    const translateElements = document.querySelectorAll('.lang');
    let currentLanguage = 'en'; // Изначально устанавливаем английский язык

    // Функция переключения языка
    function switchLanguage() {
        currentLanguage = getNextLanguage(currentLanguage);

        translateElements.forEach(function (element) {
            const key = element.getAttribute('key');
            element.textContent = translateText(key, currentLanguage);
        });
    };

    // Функция для определения следующего языка в циклической последовательности
    function getNextLanguage(current) {
        const languages = ['en', 'ua', 'ru'];
        const currentIndex = languages.indexOf(current);
        const nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex];
    };

    // Функция для перевода текста
    function translateText(key, lang) {
        if (arrLang[lang] && arrLang[lang][key]) {
            return arrLang[lang][key];
        }
        return '';
    };

    // Исходный объект arrLang
    const arrLang = {
        'en': {
            '0': 'Portfolio',
            '1': 'About',
            '2': 'Projects',
            '3': 'Contacts',
            '': '',
        },
        'ua': {
            '0': 'Портфоліо',
            '1': 'Про мене',
            '2': 'Проекти',
            '3': 'Контакти',
            '': '',
        },
        'ru': {
            '0': 'Портфолио',
            '1': 'Обо мне',
            '2': 'Проэкты',
            '3': 'Контакты',
            '': '',
        }
    };

    // Найти элементы для перевода и иконку в мобильном меню
    const headerEarthIcon = document.querySelector('.header-inner__earth-icon');
    const mobEarthIcon = document.querySelector('.mob-menu__earth-icon');

    // Проверяем наличие иконки в мобильном меню
    if (mobEarthIcon) {
        // Добавляем обработчик события на клик по иконке в мобильном меню
        mobEarthIcon.addEventListener('click', function () {
            switchLanguage();
        });
    };

    // Проверяем наличие иконки в десктопной версии
    if (headerEarthIcon) {
        // Добавляем обработчик события на клик по иконке в десктопной версии
        headerEarthIcon.addEventListener('click', function () {
            switchLanguage();
        });
    };
});