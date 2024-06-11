import '../index.css'
import updateTime from './updateTime';
import updateCloud from './updateCloud'

const displayWeather = (weatherData) => {
    const {location: loc, current: weather, forecast} = weatherData
    const forecastDay = forecast.forecastday[0].day;
    const [date, time] = loc.localtime.split(' ')
    console.log(date, time)


    // top left
    const country = document.querySelector('.country')
    country.textContent = loc.country

    const state = document.querySelector('.state')
    state.textContent = `${loc.name},`

    const region = document.querySelector('.region')
    region.textContent = loc.region

    updateTime(date, time)

    const temp = document.querySelector('.temperature')
    temp.textContent = `${weather.temp_f} °F`

    const cloud = document.querySelector('.cloud-info')
    cloud.textContent = `${weather.condition.text}`

    updateCloud(weather.condition.text, weather.is_day)

    // top right
    const feelsLike = document.querySelector('.feels-like')
    feelsLike.textContent = `${weather.feelslike_f} °F`

    const humidity = document.querySelector('.humidity')
    humidity.textContent = `${weather.humidity} %`

    const rain = document.querySelector('.rain-chance')
    rain.textContent = `${forecastDay.daily_chance_of_rain} %`

    const wind = document.querySelector('.wind-speed')
    wind.textContent = `${forecastDay.maxwind_mph} mph`


}

export default displayWeather