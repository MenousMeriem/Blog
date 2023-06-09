const expressAsyncHandler = require('express-async-handler')
const publicationModel = require('../Models/publicationModel')
const fs = require('fs/promises') // permet de gerer des fichiers 


//Ajouter une publication : 
exports.ajouterPublication = expressAsyncHandler (async (req, res) => {
    try {
        const {titrePub, Contenu, Sujet} = req.body
        console.log(req.body)
            if(!titrePub || !Contenu || !Sujet ) {
                res.status(400).json('Cette publication n éxiste pas')
            }
            await publicationModel.create({
                titrePub,
                Contenu,
                Sujet,
                // Image: req.file.paths
            })
                res.status(201).json('Publication ajoutée !! ')

    } catch (error) {
        res.status(400)
        console.log(error)
    }
})

//Modifier une publication : 
exports.modifierPublication = expressAsyncHandler(async (req,res) => {
    try {
        const {id} = req.params
        if(!id) {
            res.status(400).json('Publication n éxiste pas !!!')
        }
        await publicationModel.findByIdAndUpdate(id, req.body)
        res.status(202).json('Publication modifiée')
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})

// Supprimer une publication : 
exports.supprimerPublication = expressAsyncHandler (async (req,res) => {
    try {
        const {id} = req.params 
        if(!id) {
            res.status(400).json('Publcation n existe pas')
        }
        const currentPublication = await publicationModel.findById(id)
        currentPublication.Image && await fs.unlink(currentPublication.Image)
        await publicationModel.findByIdAndDelete(id)

        res.status(202).json('Publication supprimé !! ')
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})


// Afficher une catégorie : 
exports.afficherPublication = expressAsyncHandler(async(req,res) => {
    try {
        const publication = await publicationModel.find()
        console.log(req.publication)
        res.status(202).json(publication)
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})