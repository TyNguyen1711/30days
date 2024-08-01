const closeBtn = document.querySelector('.modal-close')
const containerImg = document.querySelectorAll('.image-item img')
const modal = document.querySelector('.modal')
const modalInner = document.querySelector('.modal-inner')
const modalInnerImg = document.querySelector('.modal-inner img')
const btnPrev = document.querySelector('.modal-btn__prev')
const btnNext = document.querySelector('.modal-btn__next')
var currentIndex = 0

function HidePreNext () {
    if(currentIndex === 0) {
        btnPrev.classList.add('hide')
    }
    else {
        btnPrev.classList.remove('hide')
    }

    if(currentIndex === containerImg.length - 1) {
        btnNext.classList.add('hide')
    }
    else {
        btnNext.classList.remove('hide')
    }
}
containerImg.forEach(function(img, index) {
    img.onclick = function(e) {
        showModal()
        currentIndex = index
        HidePreNext()
        modalInnerImg.src = e.target.src
        
    }
})

function showModal() {
    modal.classList.toggle('show')
}
closeBtn.onclick = function() {
    showModal()
}

// modal.onclick = function(e) {
//     if (e.target == e.currentTarget) 
//     {
//         showModal()
//     }
// }

btnPrev.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--
        modalInnerImg.src = containerImg[currentIndex].src
    }
    HidePreNext()
}


btnNext.onclick = function() {
    if (currentIndex < containerImg.length) {
        currentIndex++
        modalInnerImg.src = containerImg[currentIndex].src
    }
    HidePreNext()
}