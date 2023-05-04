// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті 
// data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже 
// додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');


function handleInputBlur(event) {

    // console.log(event.target.dataset.length);
    // console.log(event.target.value.length);

    if (event.target.dataset.length == event.target.value.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        // console.log('YYYYY');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        // console.log('AAAAA');
    };
};

input.addEventListener('blur', handleInputBlur);