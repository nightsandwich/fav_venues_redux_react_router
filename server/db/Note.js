const {db} = require('./db');
const {TEXT} = db.Sequelize;

const Note = db.define('note', {
    comment: {
      type: TEXT,
    }
})

module.exports = {Note};