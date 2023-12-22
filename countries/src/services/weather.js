import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY


const get = (capital) => {
    //console.log('capital', capital, 'api', API_KEY)
    return axios.get(`${BASE_URL}?q=${capital}&APPID=${API_KEY}`).then(response => response.data)
}

export default { get }
