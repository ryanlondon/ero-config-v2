const db = require('../db/model');
const queries = require('../db/queries');

module.exports = {
  getRooms: (req, res, next) => {
    db.query(queries.getRooms, [req.params.systemId])
      .then(result => res.send(result.rows))
      .catch(err => {
        console.error('<< ERROR >> Error retreiving rooms from database:\n', err);
        res.status(500).send(err);
      });
  },
};