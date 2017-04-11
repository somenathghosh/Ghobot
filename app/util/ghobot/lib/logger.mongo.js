'use strict';
const winston = require('winston');
const MongoDB = require('winston-mongodb').MongoDB;
//const config = require('../../../../config/config');
const logger = new (winston.Logger)({
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


module.exports = logger;
