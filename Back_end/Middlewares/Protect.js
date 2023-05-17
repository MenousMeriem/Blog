const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.protectUtilisateur = expressAsyncHandler(async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
        if(!token) {
            res.status(400)
            throw new Error("Y pas de token ")
        }
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log(user)
        const {id} = user
        req.user = {_id:id}
        next()
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

