const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterNow = 0;

const incrementBtnClick = () => {
return (counterValue.textContent = counterNow += 1)
}

const decrementBtnClick = () => {
return (counterValue.textContent = counterNow -= 1)
}

incrementBtn.addEventListener('click', incrementBtnClick)
decrementBtn.addEventListener('click', decrementBtnClick)

console.log(incrementBtn)
console.log(decrementBtn)