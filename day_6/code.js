const result = document.querySelector('.result')
const ekey = document.querySelector('.card.key .card__number')
const elocation = document.querySelector('.card.location .card__number')
const ewhich = document.querySelector('.card.which .card__number')
const ecode = document.querySelector('.card.code .card__number')
const ealert = document.querySelector('.alert')
const box = document.querySelector('.box')
document.addEventListener('keydown', function(e) {
    box.classList.remove('hide')
    ealert.classList.add('hide')
    ekey.innerText = e.key
    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code
    result.innerText = e.which
})