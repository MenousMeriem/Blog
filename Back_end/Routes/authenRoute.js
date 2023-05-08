const {
    seConnecter,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()

autehtificationRoute
    .post('/SeConnecter', seConnecter)


module.exports = autehtificationRoute