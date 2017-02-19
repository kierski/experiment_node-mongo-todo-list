const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

/* ADD todo item. */
router.use('/todo/edit/:id', (req, res, next) => {

  const query = {_id: ObjectID(req.params.id)};
  Todos.find(query).next((err, todo) => {
    if (err) { return console.log(err); }
    console.log('/todo/edit', todo);
    res.render('edit', {
      todo: todo
    });
  });

});

module.exports = router;
