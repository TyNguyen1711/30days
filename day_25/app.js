const eyeBtn = document.querySelector('.icon-eye')
const password = document.querySelector('.form-search input')
var isDisplay = false
eyeBtn.addEventListener('click', function() {
    this.classList.toggle('show')
    if(isDisplay) {
        password.type = 'password'
        isDisplay = false
    }
    else {
        password.type = 'text'
        isDisplay = true
    }
})

const lowerCase = document.querySelector('.lowerCase')
const upperCase = document.querySelector('.upperCase')
const number = document.querySelector('.number')
const specialSymbol = document.querySelector('.specialSymbol')
const leastChar = document.querySelector('.leastChar')

function validator() {
    password.oninput = function(e) {
        var input = e.target.value
        input.search(/[a-z]/) >= 0 ? lowerCase.classList.add('valid') : lowerCase.classList.remove('valid')
        input.search(/[A-Z]/) >= 0 ? upperCase.classList.add('valid') : upperCase.classList.remove('valid')
        input.search(/[0-9]/) >= 0 ? number.classList.add('valid') : number.classList.remove('valid')
        input.search(/\W/) >= 0 ? specialSymbol.classList.add('valid') : specialSymbol.classList.remove('valid')
        input.length >= 8 ? leastChar.classList.add('valid') : leastChar.classList.remove('valid')
    }
}

validator()