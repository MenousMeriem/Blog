const utilisateurModel = require("../Models/utilisateurModel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const refreshTokenModel = require("../Models/refreshTokenModel")

//Fonctions utilitaires
const genAccessToken = (id) => {
  return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1000h"})
}
const genRefreshToken = (id) => {
  return jwt.sign({id}, process.env.REFRESH_TOKEN_SECRET)
}
//Créer un utilisateur :
exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {

    const {mail,mot_de_passe} = req.body
    if(!mail || !mot_de_passe) {
      throw new Error('Vide!')
    }
    if((await utilisateurModel.find({mail})).length >0) {
      throw new Error('Utilisateur existe')
    }
          const newUser =  await utilisateurModel.create({
            mail,
            mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
        })
        const refreshToken = genRefreshToken(newUser._id)
        await refreshTokenModel.create({
          userId: newUser._id,
          refreshToken
        })
        res.status(201).json({
          _id: newUser._id,
          accessToken: genAccessToken(newUser._id),
          refreshToken,
        })

  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


// Modifier un utilsateur : 
exports.modifierUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
            await utilisateurModel.findByIdAndUpdate(id, req.body)
            res.status(200).json(" Utilisateur modifié !!")
  } catch (error) {
            res.status(400)
            throw new Error(error)
  }
})


// Supprimer un utilisateur : 
exports.supprimerUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
        const { id } = req.params
            await utilisateurModel.findByIdAndDelete(id)
            res.status(202).json("Utilisateur supprimé !! ")
    } catch (error) {
            res.status(400)
            throw new Error(error)
  }
})


// l'utilisateur supprime son compte :
exports.autoSupression = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
        await utilisateurModel.findByIdAndDelete(id)
        res.status(202).json("Compte supprimé !")
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})
