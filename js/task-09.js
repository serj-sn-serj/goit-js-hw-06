function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const refs = {
  button: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  backgroundColor: document.querySelector('.color'),
};

// console.log(refs.button);

refs.button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(event) { 
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.backgroundColor.textContent = refs.body.style.backgroundColor;
};