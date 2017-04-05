'use strict';

var express = require('express'),
  router = express.Router();

const BOT = require('../util/ghobot');

const ghobot = new BOT('Ghobot');

module.exports = function (app) {
  //console.log('Ghobot: I am here');
  app.post('/gQuery', router);
};

router.post('/gQuery', function (req, res, next) {

  console.log(req.session.view);
  let query = req.body.query;
  console.log(query);
  ghobot.talk(req.body.query, function(err, data){
    if(err) console.log(err);
    console.log('Found data at Controller ===>', data);
    res.send(data);
  });

});
