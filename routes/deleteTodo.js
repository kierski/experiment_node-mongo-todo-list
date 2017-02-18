const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

/* ADD todo item. */
router.use('/todo/delete/:id', (req, res, next) => {

  const query = {_id: ObjectID(req.params.id)};
  Todos.deleteOne(query, (err, response) => {
    if (err) { return console.log(err); }
    console.log('todo removed');
    res.send(200);
  });

});



module.exports = router;
