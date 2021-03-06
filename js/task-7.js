const rangeRef = document.querySelector('#font-size-control');
console.log(rangeRef)

const textRef = document.querySelector('#text')
console.log(textRef)

rangeRef.addEventListener('input', () => {
    textRef.style.fontSize = rangeRef.value + "px"
})