import sunnyIcon from '../images/weather/sunny.svg'
import cloudyIcon from '../images/weather/cloudy.svg'
import rainyIcon from '../images/weather/rainy.png'
import mistIcon from '../images/weather/mist.png'
import snowIcon from '../images/weather/snow.png'
import lightningIcon from '../images/weather/lightning.svg'
import cloudyDay from '../images/weather/cloudy-day.svg'
import cloudyNight from '../images/weather/cloudy-night.svg'
import clearSky from '../images/weather/clear-sky.png'
import moon from '../images/weather/moon.png'
import cloudIcon from '../images/weather/cloud.svg'

const updateCloud = (cloud, isDay) => {
    const weatherImg = document.querySelector('.weather-img')
    cloud = cloud.toLowerCase()
    
    if (cloud.includes('sun')) {
        weatherImg.src = sunnyIcon
    } else if (cloud.includes('cloud')) {
        weatherImg.src = cloudyIcon

        if (isDay) {
            weatherImg.src = cloudyDay
        } else {
            weatherImg.src = cloudyNight
        }
    } else if (cloud.includes('rain')) {
        weatherImg.src = rainyIcon
    } else if (cloud === 'Mist') {
        weatherImg.src = mistIcon
    } else if (cloud.includes('snow')) {
        weatherImg.src = snowIcon
    } else if (cloud.includes('thunder')) {
        weatherImg.src = lightningIcon
    } else if (isDay) {
        weatherImg.src = clearSky
    } else if (!isDay) {
        weatherImg.src = moon
    } else {
        weatherImg.src = cloudIcon
    }
    
}

export default updateCloud