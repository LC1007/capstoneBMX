const db = require('../config')
const { hash, compare, hashSync } = require('bcrypt')
const { createToken } = require('../middleware/AuthenticateUser') 

class Users{

    // Fetch all users
    fetchUsers(req, res){
        const query = `SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl FROM Users`

        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchUser(req, res){
        const query = `SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl FROM Users WHERE userID = ?`

        const { userID } = req.params

        db.query(query, [userID], (err, result) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    // Delete user
    deleteUser(req, res){
        const query = `DELETE FROM Users WHERE userID = ?`

        const { userID } = req.params

        db.query(query, [userID], (err) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'User has been successfully deleted.'
            })
        })
    }

    // Add a user
    async addUser(req, res){
        
        const data = req.body

        data.userPass = await hash(data.userPass, 10)
        
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        

        const query = `INSERT INTO Users SET ?`
        
        db.query(query,[data], (err, result) =>{
            if(err) throw err

            let token = createToken(user)
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 360000
            })
            res.json({
                status: res.statusCode,
                result,
                msg: 'User has been registered'
            })
        })
    }
}

module.exports = Users