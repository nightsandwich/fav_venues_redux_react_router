const router = require('express').Router();
const {Venue, Neighborhood, Type, Note} = require('../db');


router.get('/', async(req, res, next)=> {
    try {
      res.send(await Type.findAll());
    }
    catch(ex){
      next(ex);
    }
  });
  router.get('/:id', async(req, res, next) => {
    try{
        const type = await (Type.findByPk(req.params.id, {
            include: [
                {
                    model: Venue,
                }
            ]
        }));
        res.send(type);
    }
    catch(ex){
        next(ex);
    }
})

module.exports = router;