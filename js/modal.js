// Вариант с алертом
const openPopUp = document.querySelector('.about-info__link');
const closePopUp = document.querySelector('.modal-close');
const popUp = document.querySelector('.backdrop');
const modalForm = document.querySelector('.modal-form');
const userEmailInput = document.querySelector('.modal-form__input');

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
});
closePopUp.addEventListener('click', function () {
    popUp.classList.remove('active');
});
modalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Проверяем валидацию формы
    if (modalForm.checkValidity()) {
        popUp.classList.remove('active');
        alert('This is a test window!');
    }
});


// Простой вариант через id
// const openPopUp = document.getElementById('open_pop_up');
// const closePopUp = document.getElementById('pop_up_close');
// const popUp = document.getElementById('pop_up');

// openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// });
// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// });


// Простой вариант через классы (querySelector())
// const openPopUp = document.querySelector('.about-info__link');
// const closePopUp = document.querySelector('.modal-close');
// const popUp = document.querySelector('.backdrop');

// openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// });
// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// });