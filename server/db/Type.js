const {db} = require('./db');
const {STRING} = db.Sequelize;

const Type = db.define('type', {
    name: {
      type: STRING,
      allowNull: false,
      unique: true,
    }
  });

module.exports = {Type};