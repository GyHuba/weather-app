const input = document.querySelector('.search');
const weatherText = document.querySelector('.weather-text');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');

let timer;
input.addEventListener('keyup', function (e) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if(e.target.value === '' || e.target.value === null) return
    getCity(e.target.value)
    .then(data =>{  
        if(data === undefined) return
        city.innerHTML = `${data.EnglishName}, ${data.Country.EnglishName}`
        return getWeather(data.Key)
    })
    .then(data =>{
        weatherText.innerHTML = data.WeatherText;
        temperature.innerHTML = data.Temperature.Metric.Value
    })
  }, 500);
});
