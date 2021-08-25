const {db} = require('./db');
const {STRING } = db.Sequelize;

const Venue = db.define('venue', {
    name: {
      type: STRING,
      allowNull: false
    },
    imageUrl: {
      type: STRING,
      defaultValue: ''
    },
    website: {
      type: STRING,
      defaultValue: 'https://www.yelp.com/'//need to insert
    }
});

module.exports = {Venue};