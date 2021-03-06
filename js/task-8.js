
const inputRef = document.querySelector("#controls [type='number']");
const boxes = document.querySelector('#boxes');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
let number;



function onInputValue(event) {
      number = event.currentTarget.value;
console.log(number);
    return number;
};

// console.log(number);
const amount = number;

const createBoxes = (amount) => {
    const box = document.createElement('div');
    let width = 30;
    let height = 30;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    if (amount === inputRef.value) {
        boxes.append(box);
    };
    if (amount >= 1) {
        for (let i = 1; i <= amount; i += 1) {
            width += 10;
            height += 10;
            boxes.append(box);
        }
    };
};

const removeBoxes = () => {
    boxes.remove();
};



render.addEventListener('click', (e)=>createBoxes(inputRef.value));
destroy.addEventListener('click', removeBoxes);
inputRef.addEventListener('input', onInputValue);