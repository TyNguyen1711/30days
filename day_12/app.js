const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range--bar')
const text = document.querySelector('.range--bar span')
const body = document.querySelector('body')

console.log([range])
range.addEventListener('mousemove', function(e) {    
    var result = Math.round((e.offsetX / range.offsetWidth) * 100)
    console.log(result)
    text.innerText = result + '%' 
    rangeBar.style.width = result + '%'
    body.style.background = `rgba(0, 0, 0, ${e.offsetX / range.offsetWidth})`
   
})