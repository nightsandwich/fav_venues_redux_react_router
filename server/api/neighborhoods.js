const router = require('express').Router();
const {Venue, Neighborhood, Type, Note} = require('../db');

router.get('/neighborhoods', async(req, res, next)=> {
    try {
        res.send(await Neighborhood.findAll({
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

    router.get('/neighborhoods/:id', async(req, res, next) => {
        try{
            const neighborhood = await (Neighborhood.findByPk(req.params.id, {
                include: [
                    {
                        model: Venue,
                    },
                    {
                        model: Type
                    },
                    {
                        model: Note,
                    }
                ]
            }));
            res.send(neighborhood);
        }
        catch(ex){
            next(ex);
        }
    })

module.exports = router;