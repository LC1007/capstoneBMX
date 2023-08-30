function authorize(requiredRole){
    return (req, res, next) =>{
        const role = req.body.userRole

        if(role === requiredRole){
            next()
        } else{
            res.json('Access Denied')
        }
    }
}

module.exports = {
    authorize
}