
const {db} = require('./db');
const {STRING, BOOLEAN } = db.Sequelize;

const Venue = db.define('venue', {
    name: {
      type: STRING,
      allowNull: false
    },
    imageUrl: {
      type: STRING,
      defaultValue: 'stock.png'
    },
    website: {
      type: STRING,
      defaultValue: 'https://www.google.com/'
    },
    visited: {
      type: BOOLEAN,
      defaultValue: false
    }
});

module.exports = {Venue};