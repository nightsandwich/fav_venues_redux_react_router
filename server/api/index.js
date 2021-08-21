const router = require('express').Router()
//const {db, Album, Artist, Song} = require('../db');

router.use('/', require('./venues'));
router.use('/', require('./neighborhoods'));
router.use('/', require('./types'));

module.exports = router