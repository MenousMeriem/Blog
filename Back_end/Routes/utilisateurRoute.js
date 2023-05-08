const {
    ajouterUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoSupression,
  } = require("../Controllers/utilisateurController")
 
  const utilisateurRoute = require("express").Router()
  
  utilisateurRoute
    .post("/AjouterUtilisateur", ajouterUtilisateur)
    .put("/ModifierUtilisateur", modifierUtilisateur)
    .delete("/SupprimerUtilisateur/:id", supprimerUtilisateur)
    .delete("/AutoSuppression", autoSupression)
  
  module.exports = utilisateurRoute
  