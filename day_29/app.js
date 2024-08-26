const listBtn = document.querySelectorAll('button')
listBtn.forEach(function(btn){
    btn.onclick = function(e) {
        const audio = e.target.querySelector('audio')
        playAudio(audio)
    }
})

function playAudio(audio) {
    const clone = audio.cloneNode()
    clone.play()

    setTimeout(() => (clone.volume = 0.8), 400)
	setTimeout(() => (clone.volume = 0.6), 800)
	setTimeout(() => (clone.volume = 0.4), 1200)
	setTimeout(() => (clone.volume = 0.2), 1600)
	setTimeout(() => (clone.volume = 0), 2000)
}

document.onkeydown = function(e) {
    const btn = document.querySelector(`.key-${e.key.toLowerCase()}`)
    btn && btn.click()
}