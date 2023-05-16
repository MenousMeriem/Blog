const {
    afficherUtilisateur,
    ajouterUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoSupression,
  } = require("../Controllers/utilisateurController")
  
  const {protectUtilisateur} = require('../Middlewares/Protect')
  const utilisateurRoute = require("express").Router()
  
  utilisateurRoute
    .get("/AfficherUtilisateur", protectUtilisateur, afficherUtilisateur)
    .post("/AjouterUtilisateur", ajouterUtilisateur)
    .put("/ModifierUtilisateur/:id", modifierUtilisateur)
    .delete("/SupprimerUtilisateur/:id", supprimerUtilisateur)
    .delete("/AutoSuppression", autoSupression)
  
  module.exports = utilisateurRoute
  