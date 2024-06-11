import { format, parseISO, isToday } from 'date-fns';
import sunnyIcon from '../images/weather/sunny.svg'
import cloudyIcon from '../images/weather/cloudy.svg'
import rainyIcon from '../images/weather/rainy.png'
import mistIcon from '../images/weather/mist.png'
import snowIcon from '../images/weather/snow.png'
import lightningIcon from '../images/weather/lightning.svg'
import clearSky from '../images/weather/clear-sky.png'


const displayForecasts = forecasts => {
    forecasts = forecasts.filter(forecast => !isToday(parseISO(forecast.date)));


    const forecastsContainer = document.querySelector('.forecasts')
    forecastsContainer.innerHTML = ''

    forecasts.forEach(forecast => {
        const forecastContainer = document.createElement('li')

        const parsedDate = parseISO(forecast.date);
        const formattedDate = format(parsedDate, 'EEEE, MMMM do');

        const day = document.createElement('h3')
        day.textContent = formattedDate

        const temp = document.createElement('p')
        temp.textContent = `${forecast.day.avgtemp_f} °F`

        const condition = document.createElement('p')
        condition.textContent = forecast.day.condition.text

        const forecastImg = document.createElement('img')

        const cloud = forecast.day.condition.text.toLowerCase()
    
        if (cloud.includes('sun')) {
            forecastImg.src = sunnyIcon
        } else if (cloud.includes('cloud')) {
            forecastImg.src = cloudyIcon
        } else if (cloud.includes('rain')) {
            forecastImg.src = rainyIcon
        } else if (cloud === 'Mist') {
            forecastImg.src = mistIcon
        } else if (cloud.includes('snow')) {
            forecastImg.src = snowIcon
        } else if (cloud.includes('thunder')) {
            forecastImg.src = lightningIcon
        } else {
            forecastImg.src = clearSky
        }

        forecastContainer.append(day, temp, condition, forecastImg)
        forecastsContainer.appendChild(forecastContainer)
    })
}

export default displayForecasts