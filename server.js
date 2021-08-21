const express = require('express');
const { static } = express;
const path = require('path');

const app = express();

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/venues', async(req, res, next)=> {
  try {
    res.send(await Venue.findAll());
  }
  catch(ex){
    next(ex);
  }
});

const init = async()=> {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

const Sequelize = require('sequelize');
const { STRING, TEXT, ENUM } = Sequelize;
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/fav_venues_db');

const Venue = db.define('venue', {
    name: {
      type: STRING,
      allowNull: false
    },
    imageUrl: {
      type: STRING,
      defaultValue: 'default-image.jpg' //need to add this to public folder
    },
    website: {
      type: STRING,
      defaultValue: ''//need to insert
    }
});

const Note = db.define('note', {
  comment: {
    type: TEXT,
  }
})

const Type = db.define('type', {
  name: {
    type: ENUM('Bar','Restaurant','Activity', 'Museum', 'Other'),
    defaultValue: 'Other',
  }
});

const Neighborhood = db.define('neighborhood', {
  name: {
    type: ENUM('Williamsburg','Greenpoint', 'Bed-Stuy', 'Bushwick'),
    allowNull: false,
  }
});

Venue.belongsTo(Type);
Type.hasMany(Venue);

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

    const banter = await Venue.create({name: 'Banter', imageUrl: '', website: '', typeId: bar.id, neighborhoodId: wburg.id});
    const forma = await Venue.create({name: 'Forma', imageUrl: '', website: '', typeId: restaurant.id, neighborhoodId: wburg.id});
    const vital = await Venue.create({name: 'Vital', imageUrl: '', website: '', typeId: activity.id, neighborhoodId: wburg.id});
    const diandi = await Venue.create({name: 'Di an Di', imageUrl: '', website: '', typeId: restaurant.id, neighborhoodId: greenpoint.id});
    const metrorock = await Venue.create({name: 'Metrorock', imageUrl: '', website: '', typeId: activity.id, neighborhoodId: bushwick.id});
    const chezoskar = await Venue.create({name: 'Chez Oskar', imageUrl: '', website: '', typeId: restaurant.id, neighborhoodId: bedstuy.id});
    const reliq =await Venue.create({name: 'The City Reliquary', imageUrl: '', website: '', typeId: museum.id, neighborhoodId: wburg.id}); 

    const banterNote1 = await Note.create({comment: 'foosball on Thursday nights', venueId: banter.id});
    const formaNote1 = await Note.create({comment: 'cheap pasta', venueId: forma.id});
    const formaNote2 = await Note.create({comment: 'fast delivery', venueId: forma.id});
    const vitalNote1 =await Note.create({comment: 'hard to sign up for classes', venueId: vital.id}); 
    const metrorockNote1 = await Note.create({comment: 'discount on Wednesdays for women', venueId: metrorock.id});

  };

init();