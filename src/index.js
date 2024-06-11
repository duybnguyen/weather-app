import './index.css'
import imageImports from './components/imagesImports'
import currentApiCall from './components/apiCall'
import displayWeather from './components/displayWeather'
import { da } from 'date-fns/locale'

imageImports()
const defaultLocationInput = document.getElementById('default-location')
const modal = document.querySelector('dialog')
const setDefault = document.querySelector('.set-default')
const cancelDefault = document.querySelector('.cancel')
const submitDefault = document.querySelector('.submit-default')

setDefault.addEventListener('click', () => modal.showModal())
cancelDefault.addEventListener('click', () => modal.close())

submitDefault.addEventListener('click', async (e) => {
    e.preventDefault()
    modal.close()
    const defaultLocation = defaultLocationInput.value
    if (defaultLocation) {
        localStorage.setItem('defaultLocation', defaultLocation)
        const newDefaultData = await currentApiCall(localStorage.getItem('defaultLocation'))
        if (newDefaultData) displayWeather(newDefaultData)
    }
})
const defaultLocation = localStorage.getItem('defaultLocation')
if (defaultLocation) {
        currentApiCall(defaultLocation).then(data => {
            displayWeather(data)
        })
        
} else {
    currentApiCall('Cherry Hill').then(data => {
        displayWeather(data)
    })
}


const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const location = document.getElementById('search').value
    const weatherData = await currentApiCall(location)
    displayWeather(weatherData)
})





