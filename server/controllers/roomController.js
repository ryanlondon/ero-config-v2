const db = require('../db/model');
const queries = require('../db/queries');

module.exports = {
  getRooms: (req, res, next) => {
    db.query({ text: queries.getRooms, values: [res.body.projectName], })
      .then(result => res.send(result.rows))
      .catch(err => {
        console.error('<< ERROR >> Error retreiving rooms from database:', err);
        res.status(500).send(err);
      });
  },
};