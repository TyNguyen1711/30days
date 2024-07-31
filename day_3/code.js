const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal-form__heading-icon')
const btnCloseText = document.querySelector('.modal-form__btn')
const modal_form = document.querySelector('.modal-form')
btn.onclick = function() {
    modal.classList.remove('hide')
}

btnClose.onclick = function() {
    modal.classList.add('hide')
}

btnCloseText.onclick = function() {
    modal.classList.add('hide')
}

modal.onclick = function() {
    modal.classList.add('hide')
}

modal_form.onclick = function(e) {
    e.stopPropagation()
}