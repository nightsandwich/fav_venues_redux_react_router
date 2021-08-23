const {db} = require('./db');
const {Venue} = require('./Venue');
const {Type} = require('./Type');
const {Neighborhood} = require('./Neighborhood');
const {Note} = require('./Note');

Venue.belongsTo(Type);
Type.hasMany(Venue);

//Type.hasMany(Neighborhood);
//Neighborhood.hasMany(Type);

Venue.belongsTo(Neighborhood);
Neighborhood.hasMany(Venue);

Note.belongsTo(Venue);
Venue.hasMany(Note);

const syncAndSeed = async()=> {
    await db.sync({ force: true });
    
    const bar = await Type.create({name: 'Bar'});
    const restaurant = await Type.create({name: 'Restaurant'});
    const activity = await Type.create({name: 'Activity'});
    const museum = await Type.create({name: 'Museum'});
    const other = await Type.create({name: 'Other'});

    const wburg = await Neighborhood.create({name: 'Williamsburg'});
    const greenpoint = await Neighborhood.create({name: 'Greenpoint'});
    const bedstuy = await Neighborhood.create({name: 'Bed-Stuy'});
    const bushwick = await Neighborhood.create({name: 'Bushwick'});

    const banter = await Venue.create({name: 'Banter', imageUrl: 'http://banterbrooklyn.com/wp-content/uploads/2011/03/headon.jpg', website: 'https://banterbrooklyn.com/', typeId: bar.id, neighborhoodId: wburg.id});
    const forma = await Venue.create({name: 'Forma', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/9siBwTJADkeBunhZLbND3A/o.jpg', website: 'https://www.formapasta.com/', typeId: restaurant.id, neighborhoodId: wburg.id});
    const vital = await Venue.create({name: 'Vital', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a01fd2db1ffb6985b2a9ac5/1619815760848-MOJK5RP23L0HQKBWLFIS/VITAL_Brooklyn_MadeleineChanStanley_4_2021-6.jpg', website: 'https://www.vitalclimbinggym.com/brooklyn', typeId: activity.id, neighborhoodId: wburg.id});
    const diandi = await Venue.create({name: 'Di an Di', imageUrl: 'https://pyxis.nymag.com/v1/imgs/bca/c93/26d1117e38ba63e4c60279ffcd8d5bbb39-di-and-di-06.rsocial.w1200.jpg', website: 'https://www.diandi.nyc/', typeId: restaurant.id, neighborhoodId: greenpoint.id});
    const metrorock = await Venue.create({name: 'Metrorock', imageUrl: 'https://cdn.shortpixel.ai/spai/w_1082+q_lossy+ret_img+to_webp/https://bushwickdaily.com/wp-content/uploads/2021/04/N_moyr-yYhYbnzg5_PLs4Q-1024x768.jpg', website: 'https://www.metrorock.com/bushwick', typeId: activity.id, neighborhoodId: bushwick.id});
    const chezoskar = await Venue.create({name: 'Chez Oskar', imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/01/78/26/bb/front-street-view.jpg', website: 'http://www.chezoskar.com/', typeId: restaurant.id, neighborhoodId: bedstuy.id});
    const reliq =await Venue.create({name: 'The City Reliquary', imageUrl: 'https://i1.wp.com/www.cityreliquary.org/wp-content/uploads/2009/07/CR.jpg', website: 'https://www.cityreliquary.org/', typeId: museum.id, neighborhoodId: wburg.id}); 
    const goldenyears = await Venue.create({name: 'Golden Years', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/TG42_mjKbvXqUwHCSfsrjw/o.jpg', website: 'https://goldenyearsbk.com/', typeId: bar.id, neighborhoodId: wburg.id});

    const banterNote1 = await Note.create({comment: 'foosball on Thursday nights', venueId: banter.id});
    const formaNote1 = await Note.create({comment: 'cheap pasta', venueId: forma.id});
    const formaNote2 = await Note.create({comment: 'fast delivery', venueId: forma.id});
    const vitalNote1 =await Note.create({comment: 'hard to sign up for classes', venueId: vital.id}); 
    const metrorockNote1 = await Note.create({comment: 'discount on Wednesdays for women', venueId: metrorock.id});

  };

module.exports = {
    db,
    Venue,
    Type,
    Neighborhood,
    Note,
    syncAndSeed
}