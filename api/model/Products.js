const db = require('../config');

class Products{

    // Fetch all products
    fetchProducts(req, res){
        const query = 'SELECT bmxID, prodName, prodDesc, quantity, amount, category, prodUrl FROM Products'

        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    // Fetch single product
    fetchProduct(req, res){
        const query = 
        `SELECT bmxID, prodName, prodDesc, quantity, amount, category, prodUrl 
         FROM Products  
         WHERE bmxID = ?`

         const { bmxID } = req.params

         db.query(query, [bmxID], (err, result) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
         })
    }

    // Add a product
    addProduct(req, res){
        const query = `INSERT INTO Products SET ?`

        const data = req.body

        db.query(query, [data], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Product has been successfully created.'
            })
        })
    }

    // Update a product
    updateProduct(req, res){
        const query = `UPDATE Products SET ? WHERE bmxID = ? `

        const { bmxID } = req.params
        const data = req.body

        db.query(query, [data, bmxID], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Product has been successfully updated'
            })
        })
    }

    // Delete a product
    deleteProduct(req, res){
        const query = `DELETE FROM Products WHERE bmxID = ?`
        
        const { bmxID } = req.params

        db.query(query, [bmxID], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: `Product with product ID ${bmxID} has been successfully deleted`
            })
        })
    }

}

module.exports = Products