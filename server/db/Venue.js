const {db} = require('./db');
const {STRING, TEXT} = db.Sequelize;

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
      defaultValue: 'https://www.yelp.com/'//need to insert
    },
    description: {
      type: TEXT,
      defaultValue: 'This is a place.'
    }
});

module.exports = {Venue};