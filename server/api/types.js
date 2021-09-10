const router = require('express').Router();
const {Venue, Type} = require('../db');


router.get('/', async(req, res, next)=> {
    try {
      res.send(await Type.findAll({
        include: [
          {
            model: Venue
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
        const type = await Type.findByPk(req.params.id, {
            include: [
                {
                    model: Venue,
                }
            ],
            order: [
              ['name']
            ]
        });
        //console.log('type:',type);
        res.send(type);
    }
    catch(ex){
        next(ex);
    }
})

router.post('/', async(req, res, next)=> {
  try {
    const _type = await Type.create(req.body);
    const type = await Type.findByPk(_type.id, {
      include: [
        {
          model: Venue
        }
      ]
    })
    //console.log('type id: ', type.id)
    res.status(201).send(type);
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router;