const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const addTodo = require('./routes/addTodo');
const deleteTodo = require('./routes/deleteTodo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/todo';
const url = 'mongodb://andrzej:12345@ds017246.mlab.com:17246/andrzej_todo_tasks_list';

app.get('/', index);
app.use('/users', users);
app.post('/todo/add', addTodo);
app.get('/todo/delete/:id', deleteTodo);

// connect to mongodb
MongoClient.connect(url, (err, database) => {
  console.log('MongoDB connected...');
  if (err) return err;
  db = database;
  Todos = db.collection('todos');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
