// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/bookshare-app';

// PACKAGE REQUIRES
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const helmet = require('helmet');
const session = require('express-session');
const redis = require('redis')
const RedisStore = require('connect-redis')(session);
const url = require('url');

mongoose.Promise = global.Promise;

//REDIS SETUP 
let store = null
if (process.env.REDISTOGO_URL) {
 let redisUrl = url.parse(process.env.REDISTOGO_URL);
 let redisAuth = redisUrl.auth.split(':');

 new RedisStore({
  host: redisUrl.hostname,
  port: redisUrl.port,
  db: redisAuth[0],
  pass: redisAuth[1]
  });
} 
// DB CONNECT
require('mongoose').connect(MONGO_URI, err => {
  if(err) throw err;
  console.log(`MongoDB connected to ${MONGO_URI}`);
});

// APP DECLARATION
const app = express();
//SET UP SECURITY 
app.use(helmet());
// Since postinstall will also run when you run npm install
// locally we make sure it only runs in production
if (process.env.NODE_ENV !== 'production') {
  // WEBPACK CONFIG
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(path.join(__dirname, '../build')));
}

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(require('express-session')({
    store: store,
    secret: 'keyboard cat',
    resave: false,
    name : 'connect.sid',
    saveUninitialized: false,
    cookie: {httpOnly: false}
}));
app.use(passport.initialize());
app.use(passport.session());

// STATIC DECLARATION
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

// PASSPORT CONFIG
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});
