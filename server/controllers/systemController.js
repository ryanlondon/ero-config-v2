const db = require('../db/model');
const queries = require('../db/queries');

module.exports = {
  getSystems: (req, res) => {
    db.query(queries.getSystems)
      .then(result => res.send(result.rows))
      .catch((err) => {
        console.error('<< ERROR >> Error retreiving systems from database:\n', err);
        res.status(500).send(err);
      });
  },
};
