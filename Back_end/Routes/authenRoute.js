const {
    seConnecter, seDeconnecter,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()

autehtificationRoute
    .post('/SeConnecter', seConnecter)
    .post('/SeDeconnecter', seDeconnecter)


module.exports = autehtificationRoute