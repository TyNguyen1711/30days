const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const form = document.querySelector('form')

function showError(input, message) {
    input.parentElement.classList.add('error')
    input.parentElement.querySelector('small').innerText = message
}
function showSuccess(input) {
    input.parentElement.classList.remove('error')
    input.parentElement.querySelector('small').innerText = ''
}
function isRequire(inputs) {
    inputs.forEach(function(input, index) {
        if(!input.value.trim()) {
            showError(input, `${getFieldName(input)} is required`)
        }
        else {
            showSuccess(input)
        }
    })
}
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    
}
function isEmail(input) {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    input.value = input.value.trim()
    if(input.value) {
        if(!regexEmail.test(input.value)){
            showError(input, 'Trường này phải email')
        }
        else 
        {
            showSuccess(input)
        }
    }
}
function checkLength(input, min, max) {
    input.value = input.value.trim()
    
    if(input.value) {
        if (input.value.length < min) {
            showError(input, `Ít nhất phải ${min} kí tự`)
        }
        else if (input.value.length > max) {
            showError(input, `Nhiều nhất ${max} kí tự`)
        }
    }
}

function checkConfirmPassword(password, confirmPassword) {
    if(password.value.trim() && confirmPassword.value.trim() && password.value.trim() != confirmPassword.value.trim()) {
        showError(confirmPassword, 'Mật khẩu phải trùng nhau')
    }
}

form.onsubmit = function(e) {
    e.preventDefault();
    isRequire([username, email, password, confirmPassword])
    isEmail(email)
    checkLength(username, 3 ,10)
    checkConfirmPassword(password, confirmPassword)
}

