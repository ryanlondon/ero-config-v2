const db = require('../db/model');
const queries = require('../db/queries');

module.exports = {
  getQueryType: (req, res, next) => {
    res.locals.queryType = queries.getSources; // set type as sources by default
    if (req.params.type === 'devices') res.locals.queryType = queries.getDevices;
    next();
  },

  getItems: (req, res, next) => {
    db.query(res.locals.queryType, [req.params.systemId])
      .then(result => res.send(result.rows))
      .catch(err => {
        console.error(`<< ERROR >> Error retreiving ${req.params.type} from database:\n`, err);
        res.status(500).send(err);
      });
  },
};