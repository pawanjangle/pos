import axios from 'axios';

const baseUrl = "http://localhost:5000"
let endPoint = {
    createproduct: "/api/product/create-product",
    getproducts: "/api/product/get-products",
    updateproduct: "/api/product/update-product"
}
export const createProductfunction = async (product) => {
    try {
        const res = await axios.post(baseUrl + endPoint.createproduct, product)
        console.log(res)
        return res
    }
    catch (err) {
        console.log(err)
        return err.response
    }
}
export const callAllProducts = async (paylaod) => {
    try {
        const res = await axios.get(baseUrl + endPoint.getproducts)
        return res
    }
    catch (err) {
        console.log(err)
        return err.response
    }
}
export const updateProduct = async (payload) => {
    try {
        const res = await axios.post(baseUrl + endPoint.updateproduct, payload )
        return res
    }
    catch (err) {
        console.log(err)
        return err.response
    }
}