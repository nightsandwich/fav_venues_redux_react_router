
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
  
// router.get('/:id', async(req, res, next) => {
//       try{
//           const venue = await (Venue.findByPk(req.params.id, {
//               include: [
//                   {
//                       model: Neighborhood,
//                   },
//                   {
//                       model: Type
//                   },
//                   {
//                       model: Note,
//                   }
//               ]
//           }));
//           res.send(venue);
//       }
//       catch(ex){
//           next(ex);
//       }
//   })

//   router.get('/:id/notes', async(req, res, next) => {
//     try{
//         const venue = await (Venue.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: Note,
//                 }
//             ]
//         }));
//         res.send(venue);
//     }
//     catch(ex){
//         next(ex);
//     }
// })
// router.post('/:id/notes', async(req, res, next)=> {
//     try {
//         //console.log(req.body);
//         const note = await Note.create({ venueId: req.params.id, comment: req.body.comment});
//         res.status(201).send(note);
//     }
//     catch(ex){
//       next(ex);
//     }
//   });

//   router.delete('/:id/notes', async(req, res, next)=> {
//     try {
//         //console.log(req.body);
//         const note = await Note.findByPk(req.params.id);
//         res.status(201).send(note);
//     }
//     catch(ex){
//       next(ex);
//     }
//   });

  router.post('/', async(req, res, next)=> {
    try {
      const {name, website, imageUrl, neighborhoodId, typeId} = req.body;
      const neighborhood = await Neighborhood.findByPk(neighborhoodId);
      const type = await Type.findByPk(typeId);
      const _venue = await Venue.create({name, website, imageUrl});
      await neighborhood.addVenue(_venue);
      await type.addVenue(_venue);
      
      const venue = await Venue.findByPk(_venue.id, {
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
      });
 
      res.status(201).send(venue);
    }
    catch(ex){
      console.log(ex);
      next(ex);
    }
  }); 
router.put('/:id', async(req, res, next) => {
    try{
      const _venue = await Venue.findByPk(req.params.id);
      //console.log(venue);
      //console.log('reqbody:',req.body);
      await _venue.update(req.body);
      await _venue.save();
      const venue = await Venue.findByPk(_venue.id, {
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
      });
 
      res.send(venue);
    }
    catch(ex){
      next(ex);
    }
  })
  router.delete('/:id', async(req, res, next)=> {
    try {
        //console.log(req.body);
        const venue = await Venue.findByPk(req.params.id);
        await venue.destroy();
        res.status(201).send(venue);
    }
    catch(ex){
      next(ex);
    }
  });
  
  module.exports = router;