const listCounter = document.querySelectorAll('.counter')

function counterUp (el) {
    var value = parseInt(el.querySelector('h2').innerText)
    var count = 0
    setInterval(function(){
        count += value / 100
        count = Math.round(count)
        if (count >= value) {
            el.querySelector('h2').innerText = value
        }
        else {
            el.querySelector('h2').innerText = count
        }
    }, 10)
}


listCounter.forEach(function(item) {
    counterUp(item)
})