
const {db} = require('./db');
const {STRING, BOOLEAN } = db.Sequelize;

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
    },
    visited: {
      type: BOOLEAN,
      defaultValue: false
    }
});

module.exports = {Venue};