const api = 'https://fakestoreapi.com/products'
const containerProduct = document.querySelector('.list-product')
const input = document.querySelector('.search-input')

fetch(api)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        data.forEach(function(item) {
            var li = document.createElement('li')
            li.setAttribute('class', 'product-item')
            li.innerHTML = `
                <img src=${item.image} alt="">
                <div class="product-info">
                    <div class="product-name">${item.title}</div>
                    <div class="product-price">$${item.price}</div>
                </div>
            `
            containerProduct.appendChild(li)
        })
    })



    input.oninput = function(e) {
        let inputValue = e.target.value.trim()
        const listProduct = document.querySelectorAll('.product-item')
        listProduct.forEach(function(product) {
            if(product.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
                product.classList.remove('hide')
            }
            else{
                product.classList.add('hide')
            }
        })

    }