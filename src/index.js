import './index.css'
import imageImports from './components/imagesImports'
import currentApiCall from './components/apiCall'
import displayWeather from './components/displayWeather'

imageImports()
const defaultData = await currentApiCall('Cherry Hill, New Jersey')
displayWeather(defaultData)


const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const location = document.getElementById('search').value
    const weatherData = await currentApiCall(location)
    displayWeather(weatherData)
})





