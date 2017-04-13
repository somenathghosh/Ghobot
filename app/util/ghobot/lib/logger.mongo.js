'use strict';
const winston = require('winston');
const MongoDB = require('winston-mongodb').MongoDB;

if(process.env.NODE_ENV === 'development'){
  //console.log(process.env.NODE_ENV);
  module.exports = new (winston.Logger)({
      transports: [
          new (winston.transports.Console)()
        ], exceptionHandlers: [ new winston.transports.Console() ]
  });
}
if(process.env.NODE_ENV === 'production'){
  module.exports = new (winston.Logger)({
      transports: [
          new (winston.transports.Console)(),
          new(winston.transports.MongoDB)({
              db : 'mongodb://heroku_rt5p6nd5:tgti2uoqhldtn0s89omkgmufvu@ds159180.mlab.com:59180/heroku_rt5p6nd5',
              collection: 'logs',
              username:'heroku_rt5p6nd5',
              password: 'tgti2uoqhldtn0s89omkgmufvu'
          })
        ], exceptionHandlers: [ new winston.transports.Console() ]
  });
}
