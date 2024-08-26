const container = document.querySelector('.container')

for(var i = 0; i < 200; i++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'square')
    container.appendChild(square)

    square.addEventListener('mouseenter', function() {
        let color = setColor()
        square.style.backgroundColor = `${color}`
        square.style.boxShadow = `0 0 100px ${color}, 0 0 10px ${color}`
    })

    square.addEventListener('mouseleave', function() {
       
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = '0 0 2px #000'
    })
}

function setColor() {
    var arr = '0123456789abcdef'
    var color = '#'
    for(var i = 0; i < 6; i++) {
        color += arr[Math.floor(Math.random() * arr.length)]
    }
    return color
}