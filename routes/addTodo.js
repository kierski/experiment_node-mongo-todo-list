var express = require('express');
var router = express.Router();

/* ADD todo item. */
router.use('/todo/add', (req, res, next) => {

  // todo object
  const todo = {
    text: req.body.text,
    body: req.body.body
  };

  // Insert todo object into Todos collection
  Todos.insert(todo, (err, result) => {
    if (err) { return console.log(err); }
    console.log('todo added...');
    res.redirect('/');
  });
  
});

module.exports = router;
