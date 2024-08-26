
const input = document.querySelector('#btnMode')
const toggle = document.querySelector('.labelMode')
const apps = document.querySelector('.apps')


function init() {
    if(JSON.parse(localStorage.getItem('status')) === true) {
        console.log(1)
        apps.classList.remove('dark')
    }
    else {
        apps.classList.add('dark')
        console.log(2)
        input.checked = true
    }
}
toggle.onclick = function() {
    localStorage.setItem('status', input.checked)
    apps.classList.toggle('dark')
}

init()