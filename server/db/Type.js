const {db} = require('./db');
const {ENUM} = db.Sequelize;

const Type = db.define('type', {
    name: {
      type: ENUM('Bar','Restaurant','Activity/Gym', 'Museum', 'Store', 'Other'),
      defaultValue: 'Other',
    }
  });

module.exports = {Type};