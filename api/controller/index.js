const express = require('express')
const routes = express()
const { products, users } = require('../model')
const bodyParser = require('body-parser')
const { authorize } = require('../middleware/AuthorizeUser')
const path = require('path')

// Fetch all products
routes.get('/products', (req, res) =>{
    products.fetchProducts(req, res)
})

// Fetch single product
routes.get('/products/:bmxID', (req, res) =>{
    products.fetchProduct(req, res)
})

// Add a product
routes.post('/products', bodyParser.json(), (req, res) =>{
    products.addProduct(req, res)
})

// Updated a product
routes.patch('/products/:bmxID', bodyParser.json(), (req, res) =>{
    products.updateProduct(req, res)
})

// Delete a product
routes.delete('/products/:bmxID', (req, res) =>{
    products.deleteProduct(req, res)
})

routes.get('/admin', authorize('admin'), (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../static/html/admin.html'))
})

// ================= Users ================== //

// Fetch all users
routes.get('/users', (req, res) =>{
    users.fetchUsers(req, res)
})

// Fetch all users
routes.get('/users/:userID', (req, res) =>{
    users.fetchUser(req, res)
})

// Add user
routes.post('/users', bodyParser.json(), (req, res) =>{
    users.addUser(req, res)
})

// Delete a user
routes.delete('/users', (req, res) =>{
    users.deleteUser(req, res)
})

module.exports ={
    express,
    routes
}