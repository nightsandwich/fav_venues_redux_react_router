const router = require('express').Router();
const {Venue, Neighborhood, Type, Note} = require('../db');

router.get('/', async(req, res, next)=> {
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

module.exports = router;