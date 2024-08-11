const btnSuccess = document.querySelector('.btn--success')
const btnWarning = document.querySelector('.btn--warning')
const btnError = document.querySelector('.btn--error')

const toastContainer = document.querySelector('#toast')
function Toast(message, type) {
    const iconSuccess = '<i class="fa-solid fa-circle-check"></i>'
    const iconWarning = '<i class="fa-solid fa-circle-exclamation"></i>'
    const iconError = '<i class="fa-solid fa-triangle-exclamation"></i>'
    var icon = ''
    if (type == 'success') {
        icon = iconSuccess
    }
    else if (type == 'warning') {
        icon = iconWarning
    }
    else {
        icon = iconError
    }
    const toast = document.createElement('div')
    toast.classList.add('toast', `toast--${type}`)
    toast.innerHTML = `
            ${icon}
            <p>${message}</p>
            <span></span>
    `
    toastContainer.appendChild(toast)

    setTimeout(function() {
        toast.style.animation = 'fadeOut linear 2s forwards'
    }, 6000)

    setTimeout(function() {
        toast.remove()
    }, 8000)
}


function showSuccessToast() {
    console.log(1)
    Toast('This is a success toast !', 'success')
}

function showWarningToast() {
    Toast('This is a warning toast !', 'warning')
}

function showErrorToast() {
    Toast('This is a error toast !', 'error')
}

btnSuccess.onclick = showSuccessToast;
btnWarning.onclick = showWarningToast;
btnError.onclick = showErrorToast;