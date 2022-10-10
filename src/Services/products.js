import axios from "axios"
const baseUrl = "http://localhost:3001/products"

const getAll = async() =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newProduct) =>{
    const response = await axios.post(baseUrl, newProduct)
    return response.data
}

const services = { getAll, create }

export default services;