const utilisateurModel = require('../Models/utilisateurModel')
const refreshTokenModel = require('../Models/refreshTokenModel')
const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 


//Sign token
const genererToken =(data) => {
    const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "10m"})
    return token
}

//Login : [ACCESS TOKEN,REFRESH TOKEN]
exports.seConnecter = expressAsyncHandler(async (req, res) => {
    try{
        const {mail, mot_de_passe} = req.body
            if (!mail || !mot_de_passe) {
                res.status(400)
                throw new Error('Incorrect')
        }

        const utilisateurExiste = await utilisateurModel.find({mail: mail})
            if(utilisateurExiste.length == 0) {
                res.status(400)
                throw new Error('Utilisateur n existe pas')
        }

        const matchPassword = await bcrypt.compare(
            mot_de_passe,
            utilisateurExiste[0].mot_de_passe
        )
            if(!matchPassword){
                res.status(400)
                throw new Error('Mot de passe incorrect')
            }

        const accessToken = genererToken({
            _id: utilisateurExiste[0]._id,
        })

        const refreshToken = jwt.sign(
            { 
            _id: utilisateurExiste[0]._id, 
            },
            process.env.REFRESH_TOKEN_SECRET
        )
            await refreshTokenModel.create({ userId: utilisateurExiste[0]._id, refreshToken})
            res.status(200).json({
                _id: utilisateurExiste[0]._id,
                mail: utilisateurExiste[0].mail,
                accessToken,
                refreshToken,
            })
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//Refresh access token
exports.refreshAccess = expressAsyncHandler(async (req, res) => {
    try {
        const { token } = req.body
            if (!token) {
                res.status(400)
                throw new Error("No refreshToken!")
            }

        const refreshExist = await RefreshTokenModel.find({ refreshToken: token })
            if (refreshExist.length == 0) {
                res.status(400)
                throw new Error("No refreshToken!")
            }

        const userData = jwt.verify(token, process.env.REFRESH_TOKEN)
        
        const {iat, ...data} = userData
        
        const accessToken = genererToken(data)
            res.status(200).json({ token: accessToken })

    }catch (error) {
            res.status(400)
            throw new Error(error)
        }
  })


//Logout
exports.logout = expressAsyncHandler(async (req, res) => {
    try {
        const { token } = req.body
            if (!token) {
                res.status(400)
                throw new Error("No token!")
            }
            await refreshTokenModel.findOneAndDelete({ refreshToken: token })
                res.status(200).json('Vous vous etes deconnctés ! ')
    }catch (error) {
        throw new Error(error)
    }
  })