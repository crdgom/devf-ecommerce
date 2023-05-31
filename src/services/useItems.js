import axios from 'axios'

const BASE_URL = 'https://us-east-1.aws.data.mongodb-api.com/app/ecommerce-gaeig/endpoint'

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  try {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  } catch (e) { console.error(e) }
})

const getAllProductsService = () => axios.get(`${BASE_URL}/products`)

const getSingleProductService = (id) => axios.get(`${BASE_URL}/product?id=${id}`)

const addProductService = (data) => axios.post(`${BASE_URL}/products/add`, data)

const updateProductService = (id, data) => axios.put(`${BASE_URL}/products/update?id=${id}`, data)

const deleteProductService = (id) => axios.delete(`${BASE_URL}/items/${id}`)

export {
  getAllProductsService,
  getSingleProductService,
  addProductService,
  updateProductService,
  deleteProductService
}
