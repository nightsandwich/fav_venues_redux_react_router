const router = require('express').Router();
const {Venue, Neighborhood} = require('../db');

router.get('/', async(req, res, next)=> {
    try {
        res.send(await Neighborhood.findAll({
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
        const neighborhood = await Neighborhood.findByPk(req.params.id, {
            include: [
                {
                    model: Venue,
                }
            ],
            order: [
                ['name']
            ]
        });
        res.send(neighborhood);
    }
    catch(ex){
        next(ex);
    }
});

router.post('/', async(req, res, next)=> {
    try{
        const _neighborhood = await Neighborhood.create(req.body);
        const neighborhood = await Neighborhood.findByPk(_neighborhood.id, {
            include: [
                {
                    model: Venue
                }
            ]
        })
        res.status(201).send(neighborhood);
    }
    catch(ex){
        next(ex);
    }
});

module.exports = router;