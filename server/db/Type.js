const {db} = require('./db');
const {ENUM} = db.Sequelize;

const Type = db.define('type', {
    name: {
      type: ENUM('Bar','Restaurant','Activity', 'Museum', 'Other'),
      defaultValue: 'Other',
    }
  });

module.exports = {Type};