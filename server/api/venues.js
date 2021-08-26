
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
          ],
          order: [
              ['name']
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

  router.get('/:id/notes', async(req, res, next) => {
    try{
        const venue = await (Venue.findByPk(req.params.id, {
            include: [
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
router.post('/:id/notes', async(req, res, next)=> {
    try {
        //console.log(req.body);
        await Note.create({ venueId: req.params.id, comment: req.body.comment});
        res.status(201).redirect('http://localhost:3000/');
    }
    catch(ex){
      next(ex);
    }
  });

  router.post('/', async(req, res, next)=> {
    try {
        /*
        const neighborhood = await Neighborhood.findAll({
            where: 
                {
                    name: req.body.neighborhood
                }
        });
        const type = await Type.findAll({       
             where: 
                {
                    name: req.body.type
                }
        });
        //console.log(req.body);
        console.log(neighborhood.dataValues.id); */
        await Venue.create({
            name: req.body.venueName,
            website: req.body.website,
            neighborhoodId: req.body.neighborhoodId,
            typeId: req.body.typeId,
            imageUrl: req.body.imageUrl
        });
      res.status(201).redirect('http://localhost:3000/');
    }
    catch(ex){
      next(ex);
    }
  }); 

  
  module.exports = router;