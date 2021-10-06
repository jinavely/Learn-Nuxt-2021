import axios from 'axios'

const products = axios.create({
  baseURL: process.env.baseURL
})

const carts = axios.create({
  baseURL: 'http://localhost:3000/carts'
})

// products
function fetchProducts() {
  return products.get('/')
}

function fetchProductById(id) {
  return products.get(`/${id}`)
}

function fetchProductsByKeyowrd(keyword) {
  return products.get('/', {
    params: {
      name_like: keyword
    }
  })
}

// carts
function fetchCartItems() {
  return carts.get('/')
}

function createCartItem(cartItem) {
  return carts.post('/', cartItem)
}

export {fetchProducts, fetchProductById, fetchProductsByKeyowrd, fetchCartItems, createCartItem}
