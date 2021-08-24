const router = require('express').Router()
//const {db, Album, Artist, Song} = require('../db');

router.use('/venues', require('./venues'));
router.use('/neighborhoods', require('./neighborhoods'));
router.use('/types', require('./types'));
router.use('/notes', require ('./notes'));

module.exports = router;