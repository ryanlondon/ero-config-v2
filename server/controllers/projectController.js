const db = require('../db/model');
const queries = require('../db/queries');

module.exports = {
  getAllProjects: (req, res, next) => {
    db.query({ text: queries.getAllProjects })
      .then(result => res.send(result.rows))
      .catch(err => {
        console.error('<< ERROR >> Error retreiving projects from database:', err);
        res.status(500).send(err);
      });
  },

  loadProject:  (req, res, next) => {},
};