'user strict';

const express = require('express');
const glob = require('glob');

const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const session = require('express-session');
const LokiStore = require('connect-loki')(session);


module.exports = function(app, config) {
  let env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'ejs');

  // app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());
  let options = {};
  // app.use(session({
  //   store: new LokiStore(options),
  //   secret: 'sbdjkfslh89345r3jfsdfn82313bnsd09fsdf0913412bngsdbf871231e9r283yfbwe',
  //   resave: false,
  //   saveUninitialized: true,
  //   cookie: { secure: true }
  // }));
  //For Production use session storage, Heroku might not support local file storage session.
  //Better to use mongoDB/Radis for session.
  
  let sess = {
    secret: 'sbdjkfslh89345r3jfsdfn82313bnsd09fsdf0913412bngsdbf871231e9r283yfbwe',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  };

  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
  }
   app.use(session(sess));

  let controllers = glob.sync(config.root + '/app/controllers/*.js');

  controllers.forEach(function (controller) {
    //console.log(controller)
    require(controller)(app);
  });

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if(app.get('env') === 'development'){
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });

  return app;
};
