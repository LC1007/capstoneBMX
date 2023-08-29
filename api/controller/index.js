const express = require('express')
const routes = express()
const { products } = require('../model')

// Fetch all products
routes.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

module.exports ={
    express,
    routes
}