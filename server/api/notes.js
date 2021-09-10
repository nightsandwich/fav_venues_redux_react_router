const router = require('express').Router();
const {Note, Venue} = require('../db');



router.get('/', async(req, res, next)=> {
  try {
    res.send(await Note.findAll({
      include: {
        model: Venue
      }
    }))
  }
  catch(ex){
    next(ex);
  }
});

router.get('/:id', async(req, res, next)=> {
  try {
    res.send(await Note.findAll({
      where: {
        venueId: req.params.id
      }
    }))
  }
  catch(ex){
    next(ex);
  }
});

router.post('/', async(req, res, next)=> {
      try {
          //console.log(req.body);
          const note = await Note.create(req.body);
          res.status(201).send(note);
      }
      catch(ex){
        next(ex);
      }
    });
  
router.delete('/:id', async(req, res, next)=> {
  try {
      console.log(req.params);
      const note = await Note.findByPk(req.params.id);
      await note.destroy();
      res.status(201).send(note);
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router;