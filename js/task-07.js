// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.



const refs = {
    inputSizeControl: document.querySelector('#font-size-control'),
    textToChange: document.querySelector('#text')
}

refs.inputSizeControl.addEventListener('input', () =>{
    refs.textToChange.style.fontSize = refs.inputSizeControl.value + 'px'
});

