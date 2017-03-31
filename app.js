'use strict';

const express 	= require('express');
const  config 	= require('./config/config');
const  glob 	= require('glob');
const  mongoose = require('mongoose');

//Test

// let DDGS = require('./app/util/ghobot/engine/ddgs');

// let engine = new DDGS();

// engine.listen('tagore',function (err,data) {
// 	console.log(data);
// })

//Test n

mongoose.connect(config.db);

const db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

const app = express();

module.exports = require('./config/express')(app, config);



app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

