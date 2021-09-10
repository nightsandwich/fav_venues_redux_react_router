const {db} = require('./db');
const {STRING} = db.Sequelize;

const Neighborhood = db.define('neighborhood', {
    name: {
      type: STRING,
      allowNull: false,
      unique: true
    }
  });

  module.exports = {Neighborhood};