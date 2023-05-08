function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes')
const input = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')

createBtn.addEventListener('click', onCreateBtnClick)
destroyBtn.addEventListener('click', onDestoyBtnClick)

function onCreateBtnClick() {
  const amount = Number(input.value)
 createBoxes(amount)
}

function onDestoyBtnClick() {
  destoyBoxes()
}

function createBoxes(amount) {
  boxesContainer.innerHTML = ''
  const boxes = []
  
  for (let i = 0; i < amount; i += 1) { 
      const size = 30 + i * 10
  
      const div = document.createElement('div')
      div.style.width = size + 'px'
      div.style.height = size + 'px'
      div.style.backgroundColor = getRandomHexColor()
    
      boxes.push(div) 
  }
  boxesContainer.append(...boxes)
}

function destoyBoxes () {
  boxesContainer.innerHTML = ''
  input.value = ''
}
