const boxes = document.querySelectorAll('.box')
const draggable = document.querySelector('.draggable')

draggable.addEventListener('dragstart', function() {
    this.classList.add('boder-white')
})
draggable.addEventListener('dragend', function() {
    this.classList.remove('boder-white')
})
boxes.forEach(function(box) {

    box.addEventListener('dragover', function() {

        this.appendChild(draggable)
    })
})