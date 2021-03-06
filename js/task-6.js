const input = document.querySelector('#validation-input')


const inputCheck = () => {
    if (input.dataset.length !== input.value.length) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
    if (input.dataset.length == input.value.length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } 
    }


input.addEventListener('blur', inputCheck)