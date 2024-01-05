import axios from "axios";
//const BASE_URL = 'http://localhost:3001/persons';


const BASE_URL = '/api/persons'

// https://fullstackopen-3-bqkf.onrender.com/api/persons

const create = (person) => {
    return axios.post(BASE_URL, person)
        .then(response => response.data)
}
const getAll = () => {
    return axios.get(BASE_URL)
        .then(response => response.data)
}
const deletePerson = (id) => {
    return axios.delete(`${BASE_URL}/${id}`)
}
const update = (person) => {//aquí me he quedado
    return axios.put(`${BASE_URL}/${person.id}`, person)
        .then(response => response.data)
}
export default { create, getAll, deletePerson, update }