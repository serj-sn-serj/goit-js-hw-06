const ulCategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories : ${ulCategoriesEl.length}`);

const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item'); 

items.forEach(item => { 
  const heading = item.querySelector('h2').textContent; 
  const count = item.querySelectorAll('li').length;
  console.log(`Category: ${heading}`); 
  console.log(`Elements: ${count}`);
});

