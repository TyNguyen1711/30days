const zoomer = document.querySelector('.zoomer')

const imgs = document.querySelectorAll('.container-img')

imgs.forEach(function(img) {
    img.addEventListener('mousemove', function(e) {
        zoomer.classList.remove('hide')
        let url = img.querySelector('img').src
      
        zoomer.style.backgroundImage = `url(${url})`

        zoomer.style.left = `${e.clientX}px`
        zoomer.style.top = `${e.clientY}px`

        let width = e.target.offsetWidth
        let height = e.target.offsetHeight
    
        let percentX = ( e.offsetX / width ) * 100 + '%'
        let percentY = ( e.offsetY / height) * 100 + '%'
    
        zoomer.style.backgroundPosition = `${percentX} ${percentY}`
    
    })
    img.addEventListener('mouseleave', function() {
        zoomer.classList.add('hide')
    })
})
