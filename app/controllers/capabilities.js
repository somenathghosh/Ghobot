'use strict';

var express = require('express'),
  router = express.Router();

const BOT = require('../util/ghobot');

const ghobot = new BOT('Ghobot');

module.exports = function (app) {
  //console.log('Ghobot: I am here');
  app.get('/capabilities', router);
};

router.get('/capabilities', function (req, res, next) {

  //let query = req.body.query;
  let capabilities = ghobot.capabilities();
  capabilities = new Array().concat.apply([],capabilities);
  capabilities = new Set(capabilities);
  //capabilities = Array.from(capabilities);
  capabilities = [...capabilities];
  //console.log(capabilities);

  res.send({capabilities});

});
