const router = require('express').Router();
const {Venue, Neighborhood, Type, Note} = require('../db');


router.delete('/notes/:id', async(req, res, next)=> {
    try {
      const note = await Note.findByPk(req.params.id);
      await note.destroy();
    }
    catch(ex){
      next(ex);
    }
  });


module.exports = router;