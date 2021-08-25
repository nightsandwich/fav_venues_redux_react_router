const {db} = require('./db');
const {STRING } = db.Sequelize;

const Venue = db.define('venue', {
    name: {
      type: STRING,
      allowNull: false
    },
    imageUrl: {
      type: STRING,
      defaultValue: 'https://ontheworldmap.com/usa/city/new-york-city/map-of-brooklyn-neighborhoods-max.jpg'
    },
    website: {
      type: STRING,
      defaultValue: 'https://www.yelp.com/'//need to insert
    }
});

module.exports = {Venue};