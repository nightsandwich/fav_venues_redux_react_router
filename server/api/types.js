const router = require('express').Router();
const {Venue, Neighborhood, Type, Note} = require('../db');


router.get('/types', async(req, res, next)=> {
    try {
      res.send(await Type.findAll());
    }
    catch(ex){
      next(ex);
    }
  });


module.exports = router;