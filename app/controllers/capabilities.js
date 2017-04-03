'use strict';

var express = require('express'),
  router = express.Router();

const BOT = require('../util/ghobot');

const ghobot = new BOT('Ghobot');

module.exports = function (app) {
  //console.log('Ghobot: I am here');
  app.post('/gCap', router);
};

router.post('/gCap', function (req, res, next) {

  //let query = req.body.query;
  let cap = ghobot.capabilities();
  let capabilities = new Array().concat.apply([],cap);

  res.send({capabilities});

});
