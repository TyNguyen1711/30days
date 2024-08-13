 const listItem = document.querySelectorAll('.show-on-onscroll')
 function handle(selector) {
    if(selector.getClientRects()[0].bottom > 0 && selector.getClientRects()[0].top < window.innerHeight) {
        selector.classList.add('start')
    }
    else {
        selector.classList.remove('start')
    }
 }
 const test = document.querySelector('.box')
 console.log(test.getClientRects())
 window.onscroll = function() {
    listItem.forEach(function(item) {
        handle(item)
    })

 }
