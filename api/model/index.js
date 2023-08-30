const Products = require('./Products')
const Users = require('./Users')


module.exports = {
    products: new Products(),
    users: new Users()
}