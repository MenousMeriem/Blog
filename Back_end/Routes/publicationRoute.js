const {
    ajouterPublication, 
    afficherPublication,
    supprimerPublication,
    modifierPublication,
} = require('../Controllers/publicationController')
const path = require('node:path')

const publicationRoute = require('express').Router()
 
const multer = require('multer')

const telecharger = multer({
    storage: multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null ,path.join(__dirname, '../Images'))
        },
        filename: function (req, file, callback) {
            let filename = `${Date.now()}.${"jpeg"}`;
            callback(null, filename);
          }
    }),
    
})

publicationRoute
    .post('/ajouterPublication', telecharger.single("Image"), ajouterPublication)
    .get('/afficherPublication', afficherPublication)
    .put('/modifierPublication/:id', modifierPublication)
    .delete('/supprimerPublication/:id', supprimerPublication)

module.exports = publicationRoute