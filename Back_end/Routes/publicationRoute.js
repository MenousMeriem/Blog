const {
    ajouterPublication, 
    afficherPublication,
    supprimerPublication,
    modifierPublication,
} = require('../Controllers/publicationController')

const publicationRoute = require('express').Router()

publicationRoute
    .post('/ajouterPublication', ajouterPublication)
    .get('/afficherPublication', afficherPublication)
    .put('/modifierPublication/:id', modifierPublication)
    .delete('/supprimerPublication', supprimerPublication)

module.exports = publicationRoute