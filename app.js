'use strict';

const express 	= require('express');
const config 	= require('./config/config');
// const  glob 	= require('glob');
// const  mongoose = require('mongoose');
const cleanup = require('./gracefullShutdown');
const app = express();

// try {
//   mongoose.connect(config.db);
//   const db = mongoose.connection;
//   db.on('error', function () {
//     throw new Error('unable to connect to database at ' + config.db);
//   });
//   const models = glob.sync(config.root + '/app/models/*.js');
//
//   models.forEach(function (model) {
//     require(model);
//   });
// }
// catch(err){
//   console.log(err);
// }

app.listen(config.port, function() {
  console.log('Express server listening on port ' + config.port);
  cleanup.watch();
});

module.exports = require('./config/express')(app, config);
