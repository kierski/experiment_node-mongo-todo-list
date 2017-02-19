const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

/* POST changes form. */
router.post('/todo/edit/:id', (req, res, next) => {

  const query = {_id: ObjectID(req.params.id)};
  // create todo object
  const todo = {
    text: req.body.text,
    body: req.body.body
  };
  // Update todo
  Todos.updateOne(query, {$set:todo}, (err, result) => {
    if (err) { return console.log(err); }
    console.log('todo update...');
    res.redirect('/');
  });

});

module.exports = router;
