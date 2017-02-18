const express = require('express');
const router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {
  Todos.find({}).toArray((err, todos) => {
    if (err) { return console.log(err); }
    res.render('index', {
      todos: todos
    });
  });
});

module.exports = router;
