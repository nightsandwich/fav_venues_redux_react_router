const express = require('express');
const { static } = express;
const path = require('path');

const app = express();

app.use('/dist', static(path.join(__dirname, 'dist')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Static file-serving middleware
app.use(express.static(path.join(__dirname + '/public')))

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/venues', async(req, res, next)=> {
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

app.get('/api/venues/:id', async(req, res, next) => {
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

app.get('/api/types', async(req, res, next)=> {
    try {
      res.send(await Type.findAll());
    }
    catch(ex){
      next(ex);
    }
  });

app.get('/api/neighborhoods', async(req, res, next)=> {
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

    const banter = await Venue.create({name: 'Banter', imageUrl: 'http://banterbrooklyn.com/wp-content/uploads/2011/03/headon.jpg', website: 'https://banterbrooklyn.com/', typeId: bar.id, neighborhoodId: wburg.id});
    const forma = await Venue.create({name: 'Forma', imageUrl: 'https://s3-media0.fl.yelpcdn.com/bphoto/9siBwTJADkeBunhZLbND3A/o.jpg', website: 'https://www.formapasta.com/', typeId: restaurant.id, neighborhoodId: wburg.id});
    const vital = await Venue.create({name: 'Vital', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a01fd2db1ffb6985b2a9ac5/1619815760848-MOJK5RP23L0HQKBWLFIS/VITAL_Brooklyn_MadeleineChanStanley_4_2021-6.jpg', website: 'https://www.vitalclimbinggym.com/brooklyn', typeId: activity.id, neighborhoodId: wburg.id});
    const diandi = await Venue.create({name: 'Di an Di', imageUrl: 'https://pyxis.nymag.com/v1/imgs/bca/c93/26d1117e38ba63e4c60279ffcd8d5bbb39-di-and-di-06.rsocial.w1200.jpg', website: 'https://www.diandi.nyc/', typeId: restaurant.id, neighborhoodId: greenpoint.id});
    const metrorock = await Venue.create({name: 'Metrorock', imageUrl: 'https://cdn.shortpixel.ai/spai/w_1082+q_lossy+ret_img+to_webp/https://bushwickdaily.com/wp-content/uploads/2021/04/N_moyr-yYhYbnzg5_PLs4Q-1024x768.jpg', website: 'https://www.metrorock.com/bushwick', typeId: activity.id, neighborhoodId: bushwick.id});
    const chezoskar = await Venue.create({name: 'Chez Oskar', imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/01/78/26/bb/front-street-view.jpg', website: 'http://www.chezoskar.com/', typeId: restaurant.id, neighborhoodId: bedstuy.id});
    const reliq =await Venue.create({name: 'The City Reliquary', imageUrl: 'https://i1.wp.com/www.cityreliquary.org/wp-content/uploads/2009/07/CR.jpg', website: 'https://www.cityreliquary.org/', typeId: museum.id, neighborhoodId: wburg.id}); 

    const banterNote1 = await Note.create({comment: 'foosball on Thursday nights', venueId: banter.id});
    const formaNote1 = await Note.create({comment: 'cheap pasta', venueId: forma.id});
    const formaNote2 = await Note.create({comment: 'fast delivery', venueId: forma.id});
    const vitalNote1 =await Note.create({comment: 'hard to sign up for classes', venueId: vital.id}); 
    const metrorockNote1 = await Note.create({comment: 'discount on Wednesdays for women', venueId: metrorock.id});

  };

init();