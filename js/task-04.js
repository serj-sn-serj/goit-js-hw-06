// Лічильник складається зі спану і кнопок,
//які по кліку повинні збільшувати і зменшувати
// його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// let counterValue = 0;
// const valueSpan = document.querySelector("#value");
// const decrementButton = document.querySelector("[data-action='decrement']");
// const incrementButton = document.querySelector("[data-action='increment']");

// decrementButton.addEventListener("click", () => {
//   counterValue -= 1;
//   valueSpan.textContent = counterValue;
// });

// incrementButton.addEventListener("click", () => {
//   counterValue += 1;
//   valueSpan.textContent = counterValue;
// });

const refs = {
    counterValue: document.querySelector('#value'),
    decrementButton: document.querySelector('button[data-action="decrement"]'),
    incrementButton: document.querySelector('button[data-action="increment"]'),
};
let value = 0;

function handlerDecrementClick() {
    value -= 1;
    refs.counterValue.textContent = value;
    
};

function handlerIncrementClick() {
    value += 1;
    refs.counterValue.textContent = value;
   
};

refs.decrementButton.addEventListener('click', handlerDecrementClick);
refs.incrementButton.addEventListener('click', handlerIncrementClick);