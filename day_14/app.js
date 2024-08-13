const listImg = document.querySelectorAll('.img-item img')
const mainImg = document.querySelector('.img--main img')
const listContainerImg = document.querySelectorAll('.img-item')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
var currentIndex = 0
function removeActive () {
    listContainerImg.forEach(function(item, index) {
       
        item.classList.remove('active')
    })
}

function updateMainImg (index) {
    removeActive()
    mainImg.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach(function(image, index) {
    image.onclick = function(e) {
        currentIndex = index
        updateMainImg(index)
    }
})


btnPrev.addEventListener('click', function() {
    if (currentIndex === 0) {
        currentIndex = listImg.length - 1
  
    }
    else {
        currentIndex = currentIndex - 1
    }
    updateMainImg(currentIndex)
})




btnNext.addEventListener('click', function() {
    console.log(currentIndex)
    if (currentIndex === listImg.length - 1) {
        currentIndex = 0
    }
    else {
        currentIndex = currentIndex + 1
    }
    updateMainImg(currentIndex)
})