const router = require('express').Router();
const {Note, Venue} = require('../db');



router.get('/', async(req, res, next)=> {
  try {
    res.send(await Note.findAll({
      include: [
        {
          model: Venue
        }
      ]
    }));
  }
  catch(ex){
    next(ex);
  }
});

router.delete('/:id', async(req, res, next)=> {
    try {
      const note = await Note.findByPk(req.params.id);
      res.send(await note.destroy());
    }
    catch(ex){
      next(ex);
    }
  });

  /*router.post('/', async(req, res, next)=> {
    try {
      
      res.send(await Note.create(req.body));
    }
    catch(ex){
      next(ex);
    }
  }); */

module.exports = router;