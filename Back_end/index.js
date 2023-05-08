const express = require('express') 
const {connect} = require('mongoose')
const ErrorHandler = require('./Middlewares/errorHandler')
const authenRoute = require('./Routes/authenRoute')
const utilisateurRoute = require('./Routes/utilisateurRoute')
const publicationRoute = require('./Routes/publicationRoute')

require('dotenv').config()

const index = express()
index.use(express.json())
index.use(express.urlencoded({extended: true}))

index.use('/SeConnecter', authenRoute)
index.use('/Utilisateur', utilisateurRoute)
index.use('/Publication', publicationRoute)


index.use('/*', (req,res) => {
    res.status(404).json(' NOT FOUND ! ')
})

index.use(ErrorHandler)

connect(process.env.MONGO_URI).then(() =>{
        index.listen(process.env.PORT, () => {
            console.log(' SERVER RUNNIGN !!! ')
        })
    })
    .catch((err) => console.log(err))
