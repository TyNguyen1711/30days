const carousel = document.querySelector('.carousel')
var ismousedown = false
carousel.addEventListener('mousedown', function(){
    ismousedown = true;
})

carousel.addEventListener('mouseleave', function(){
    ismousedown = false;
})

carousel.addEventListener('mouseup', function() {
    ismousedown = false;
})

carousel.addEventListener('mousemove', function() {
    if(ismousedown){
        
    }
})