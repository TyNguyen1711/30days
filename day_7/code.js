const formInput = document.querySelector('.form__input')
const formBtn = document.querySelector('.form__btn')
const todoList = document.querySelector('.todoList')
const addBtn = document.querySelector('.form__btn')

var tags = []
function render () {
    todoList.innerHTML = ''
    tags.forEach(function(tag, index) {
        todoList.innerHTML += `<li class = "todoList-item">
                        <span>${tag}</span>
                        <i class="fa-solid fa-trash" onclick = "deleteTag(${index})"></i>
                       </li>`
    }) 
    formInput.value = ''
}
function deleteTag(index) {
    tags.splice(index , 1)
    render()
}
function addTag() {
    tags.push(formInput.value.trim())

}
formInput.onkeydown = function(e) {
    if(e.key == 'Enter'){
        addTag()
        render()
    }
}

addBtn.onclick = function() {
    addTag()
    render()
}
