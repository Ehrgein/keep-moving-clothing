import axios from "axios"
const baseUrl = "http://localhost:3001/products"
const categoriesUrl = "http://localhost:3001/categories"

const getProducts = async() =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const getCategories = async() =>{
    const response = await axios.get(categoriesUrl)
    return response.data
}

const create = async (newProduct) =>{
    const response = await axios.post(baseUrl, newProduct)
    return response.data
}

const services = { getProducts, getCategories, create }

export default services;