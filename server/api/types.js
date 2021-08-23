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
  router.get('/types/:id', async(req, res, next) => {
    try{
        const type = await (Type.findByPk(req.params.id, {
            include: [
                {
                    model: Neighborhood,
                },
                {
                    model: Type
                },
                {
                    model: Note,
                }
            ]
        }));
        res.send(venue);
    }
    catch(ex){
        next(ex);
    }
})

module.exports = router;