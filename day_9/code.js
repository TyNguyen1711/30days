const $ = document.querySelector.bind(document)
const city = $('.city')
const country = $('.country')
const time = $('.time')
const temperatureValue = $('.value')
const shortDesc = $('.short-desc')
const visibility = $('.visibility span')
const wind = $('.wind span')
const cloudSun = $('.cloud-sun span') 
const searchLocation = $('.search-location')
const content = $('.content')
async function changWeather() {
    var capital = searchLocation.value.trim() ? searchLocation.value.trim() : 'Ha noi'
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=d78fd1588e1b7c0c2813576ba183a667`

    var data = await fetch(api).then(res => res.json())
    if(data.cod == 200) {

        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + ' (m)'
        wind.innerText = data.wind.speed + ' (m/s)'
        cloudSun.innerText = data.clouds.all + ' (%)'
        temperatureValue.innerText = Math.round(data.main.temp - 273.15)
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')
    }
    else {
        console.log(1)
        content.classList.add('hide')
    }
   

}
function app() {
   
    searchLocation.onkeypress = function(e) {
        if(e.code === 'Enter') {
            changWeather()
        }
    }
}
changWeather()
app()