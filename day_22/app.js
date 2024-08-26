const listBtn = document.querySelectorAll('.menu-item')
const listFood = document.querySelectorAll('.food-item')
const foodContainer = document.querySelector('.food-list')
var container = []
function render (list) {
    var html = ''
    list.forEach(function(item){       
        html += `<div class="food-item" type = ${item.type}>
                    <img src=${item.src} alt="">
                </div>`
    })
    foodContainer.innerHTML = html

}
listFood.forEach(function(food) {
    container.push({
        type: food.getAttribute('type'),
        src: food.querySelector('img').src
    })
    
})
function removeActive() {
    listBtn.forEach(btn => {
        btn.classList.remove('active')
    })
}
listBtn.forEach(function(btn){
    btn.onclick = function(e) {
        this.classList.add('active')
        removeActive()
        let type = e.target.getAttribute('data-food')
        let newArr = container.filter(function(item){
    
            return type == 'all' || item.type == type
        })
        render(newArr)
    }
})


