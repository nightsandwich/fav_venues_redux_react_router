const {db} = require('./db');
const {ENUM} = db.Sequelize;

const Neighborhood = db.define('neighborhood', {
    name: {
      type: ENUM('Williamsburg','Greenpoint', 'Bed-Stuy', 'Bushwick'),
      allowNull: false,
    }
  });

  module.exports = {Neighborhood};