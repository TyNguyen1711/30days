const type = document.querySelector('.text-typing p')

var textOrigin = 'Nodemy - Thực Chiến - Sáng Tạo'

var current = ''
var index = 0
var isFoward = true
setInterval(function(){
    if(isFoward && index < textOrigin.length)
    {
        index ++
        if(index == textOrigin.length) {
            isFoward = false
        }
    }
    else {
        index --
        if(index == 0) {
            isFoward = true
        }
    }
    type.innerText = textOrigin.substring(0, index)
}, 200)
// setInterval(function(){
//     setTimeout(function() {
//         var display = setInterval(function(){
//             current += result[index]
//             type.innerText = current
//             index++
//             if(index === result.length)
//             {
//                 clearInterval(display)
                
//             }
//         },100)
//     }, 100)
    
//     setTimeout(function() {
//         var astringent = setInterval(function() {
//             current = current.substring(0, current.length - 1)
//             type.innerText = current
//             if(current.length === 0) {
//                 clearInterval(astringent)
//             }
//         }, 100)
//     }, 4000)
// },6000)

    
   
