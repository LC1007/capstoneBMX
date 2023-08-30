const { sign, verify } = require('jsonwebtoken')

function createToken(user){
    return sign({
        userPass: user.userPass,
        emailAdd: user.emailAdd
    }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
}

module.exports = {
    createToken
}