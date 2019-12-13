const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('in POST');
    let id = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    let SQLquery = `INSERT INTO feedback ("feeling", "understanding", "support", "comments") VALUES($1, $2, $3, $4);`;
    pool.query(SQLquery, id)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN POST -------------------------------->', error)
      res.sendStatus(500);
    });
})

module.exports = router;