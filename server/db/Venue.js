const {db} = require('./db');
const {STRING} = db.Sequelize;

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

module.exports = {Venue};