const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cookieSession = require('cookie-session');
require("dotenv").config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const port = process.env.PORT || 8001;

const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: 
  true });

  const connection = mongoose.connection;

  try{
  connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
  })
  } catch(err) {
  console.log(err);
  }

 function close_connection() {
  connection.close();
 }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


app.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});

module.exports = app;
