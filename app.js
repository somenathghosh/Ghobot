'use strict';

const express 	= require('express');
const  config 	= require('./config/config');
const  glob 	= require('glob');
const  mongoose = require('mongoose');
const process = require('process');

//Test
let DDGR = require('./app/util/ghobot/engine');

let engine = new DDGR().require(['DDGR','DDG','DDGS']).start();

// engine.listen('my name is Khan', function (err, data) {
//   console.log(err, data);
// })

console.log(engine.capabilities());

//Test n

try {
  mongoose.connect(config.db);
  const db = mongoose.connection;
  db.on('error', function () {
    throw new Error('unable to connect to database at ' + config.db);
  });
  const models = glob.sync(config.root + '/app/models/*.js');

  models.forEach(function (model) {
    require(model);
  });
}
catch(err){
  console.log(err);
}



const app = express();

module.exports = require('./config/express')(app, config);

process.on('uncaughtException', function (err) {
  console.log(err);
})


app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
