const mongoose = require("mongoose") 

const utilisateurSchema = mongoose.Schema(
    {
        mail: {
            type: String,
            required: true,
            unique: true,
        },
        mot_de_passe: {
            type: String,
            required: true,
        },
        
    },
        { timestamps: true }
)


module.exports = mongoose.model("Utilisateur", utilisateurSchema)