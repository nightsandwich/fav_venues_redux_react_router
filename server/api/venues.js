
const router = require('express').Router();
const {Venue, Neighborhood, Type, Note} = require('../db');

router.get('/', async(req, res, next)=> {
    try {
      res.send(await Venue.findAll({
          include: [
              {
              model: Type,
              },
              {
              model: Neighborhood
              },
              {
                model: Note
              }
          ]
      }));
    }
    catch(ex){
      next(ex);
    }
  });
  
router.get('/:id', async(req, res, next) => {
      try{
          const venue = await (Venue.findByPk(req.params.id, {
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