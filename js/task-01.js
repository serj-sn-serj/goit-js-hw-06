// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
// і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() 
// і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const ulCategoriesEl = document.querySelectorAll('li.item').length;
console.log(`Number of categories : ${ulCategoriesEl}`);

const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item'); 

items.forEach(item => { 
  const heading = item.querySelector('h2').textContent; 
  const count = item.querySelectorAll('li').length;
  console.log(`Category: ${heading}`); 
  console.log(`Elements: ${count}`);
});

