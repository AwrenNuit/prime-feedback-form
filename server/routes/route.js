const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete(`/delete/:id`, (req, res) => {
  let id = [req.params.id];
  let SQLquery = `DELETE FROM feedback WHERE id = $1;`;
  pool.query(SQLquery, id)
  .then((result) => {
    res.send(200);
  })
  .catch((error) => {
    console.log('ERROR IN DELETE -------------------------------->', error)
    res.sendStatus(500);
  });
});

router.get(`/`, (req, res) => {
  pool.query(`SELECT * FROM feedback ORDER BY date ASC, id ASC;`)
  .then((result)=>{
    res.send(result.rows);
  })
  .catch((error)=>{
  console.log('ERROR IN GET ------------------------------->', error);
  });
});

router.post('/', (req, res) => {
  let id = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
  let SQLquery = `INSERT INTO feedback ("feeling", "understanding", "support", "comments") VALUES($1, $2, $3, $4);`;
  pool.query(SQLquery, id)
  .then((result) => {
    res.send(201);
  })
  .catch((error) => {
    console.log('ERROR IN POST -------------------------------->', error)
    res.sendStatus(500);
  });
});

router.put(`/flag/:id`, (req, res) => {
  let id = [req.body.flag, req.params.id];
  let SQLquery = `UPDATE feedback SET flagged = $1 WHERE id = $2;`;
  pool.query(SQLquery, id)
  .then((result) => {
    res.send(200);
  })
  .catch((error) => {
    console.log('ERROR IN PUT -------------------------------->', error)
    res.sendStatus(500);
  });
});

module.exports = router;
