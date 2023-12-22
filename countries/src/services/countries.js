import axios from "axios";

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const get = () => {
    return axios.get(BASE_URL).then(response => response.data)
}
export default { get: get }