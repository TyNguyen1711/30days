// const formInput = document.querySelector('.form__input')
// const formBtn = document.querySelector('.form__btn')
// const todoList = document.querySelector('.todoList')
// const addBtn = document.querySelector('.form__btn')

// var tags = []
// function render () {
//     todoList.innerHTML = ''
//     tags.forEach(function(tag, index) {
//         todoList.innerHTML += `<li class = "todoList-item">
//                         <span>${tag}</span>
//                         <i class="fa-solid fa-trash" onclick = "deleteTag(${index})"></i>
//                        </li>`
//     }) 
//     formInput.value = ''
// }
// function deleteTag(index) {
//     tags.splice(index , 1)
//     render()
// }
// function addTag() {
//     tags.push(formInput.value.trim())

// }
// formInput.onkeydown = function(e) {
//     if(e.key == 'Enter'){
//         addTag()
//         render()
//     }
// }

// addBtn.onclick = function() {
//     addTag()
//     render()
// }


const formInput = document.querySelector('.form__input')
const todoList = document.querySelector('.todoList')
const addBtn = document.querySelector('.form__btn')
const form = document.querySelector('form')
form.onsubmit = function(e) {
    e.preventDefault()
    let value = formInput.value.trim()
    if(value) {
        addTodo({
            text: value,
            })
        SaveToLocalStorage()
    }
    formInput.value = ''
}

function addTodo(todo) {
    var li = document.createElement('li')
    li.innerHTML = `<span>${todo.text}</span>
                    <i class="fa-solid fa-trash"></i>
                    `
    if(todo.status == 'complete') {
        li.classList.add('complete')
    }
    todoList.appendChild(li)

    
    li.onclick = function() {
        this.classList.toggle('complete')
        SaveToLocalStorage()
    }
    li.querySelector('i').onclick = function() {
        this.parentElement.remove()
        SaveToLocalStorage()
    }
}

function SaveToLocalStorage() {
    let listItem = document.querySelectorAll('li')
    
    var todoStorage = []
    listItem.forEach(function(item) {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        todoStorage.push({
            text,
            status
        })
    })

    localStorage.setItem('todoList', JSON.stringify(todoStorage))
}

function init() {
    let listItem = JSON.parse(localStorage.getItem('todoList'))
    console.log(listItem)
    listItem.forEach(function(item) {
        addTodo(item)
    })
}

init()