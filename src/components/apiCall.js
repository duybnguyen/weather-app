

const API_KEY = 'af02da285ccc4c3093945849240906'


const currentApiCall = async (location) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`, {mode: 'cors'})
        const currentWeatherData = await response.json()
        console.log(currentWeatherData)
    } catch(error) {
        console.log(error)
    }

}

export default currentApiCall
