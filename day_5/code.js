const btnSearch = document.querySelector('.search__button')
const search = document.querySelector('.search')
btnSearch.addEventListener('click', function() {
    search.classList.toggle('open')
})