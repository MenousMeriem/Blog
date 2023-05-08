
const mongoose = require('mongoose')

const publicationSchema = mongoose.Schema(
    {
        titrePub: {
            type: String,
            required: true,
        },
        Contenu: {
            type: String,
            required: true,
        },
        Sujet: {
            type: String, 
            required: true,
        }
    }
)

module.exports = mongoose.model('Publication', publicationSchema)