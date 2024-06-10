import './index.css'
import imageImports from './components/imagesImports'
import currentApiCall from './components/apiCall'

imageImports()


const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', (e) => {
    const location = document.getElementById('search').value
    e.preventDefault()
    currentApiCall(location)
})





