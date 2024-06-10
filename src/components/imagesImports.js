import thermoIcon from '../images/top-right-icons/thermo.svg'
import humidityIcon from '../images/top-right-icons/humidity.svg'
import rainIcon from '../images/top-right-icons/rain.svg'
import windIcon from '../images/top-right-icons/wind.svg'
import searchIcon from '../images/search-icon.png'
import cloudIcon from '../images/weather/cloud.svg'


const imageImports = () => {
    const weatherImg = document.querySelector('.weather-img')
    weatherImg.src = cloudIcon
    
    const searchImg = document.querySelector('.search-img')
    searchImg.src = searchIcon

    const feelsLikeImg = document.querySelector('.feels-like-img')
    feelsLikeImg.src = thermoIcon

    const humidityImg = document.querySelector('.humidity-img')
    humidityImg.src = humidityIcon

    const rainImg = document.querySelector('.rain-img')
    rainImg.src = rainIcon

    const windImg = document.querySelector('.wind-img')
    windImg.src = windIcon


}

export default imageImports