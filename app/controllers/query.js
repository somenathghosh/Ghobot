'use strict';

var express = require('express'),
  router = express.Router();

const BOT = require('../util/ghobot');
const cache = require('../util/cache');

const ghobot = new BOT('Ghobot');

module.exports = function (app) {
  //console.log('Ghobot: I am here');
  app.post('/gQuery', router);
};

router.post('/gQuery', function (req, res, next) {

  //console.log(req.session.view);
  let query = req.body.query.trim();
  if(query === undefined || query === null || query === ''){
    res.send(dummy());
  }
  //query= query.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim().toLowerCase();

  console.log(query);
  let value = cache.get(query);
  //console.log(value);
  if(value){
    res.send(value);
  }
  else{
    //console.log('value not found');
    ghobot.talk(req.body.query, function(err, data){
      if(err) console.log(err);
      //console.log('Found data at Controller ===>', data);
      let success = cache.set(query, data, 10000);
      if(!success) console.log('not able to insert');
      res.send(data);
    });
  }
  // ghobot.talk(req.body.query, function(err, data){
  //   if(err) console.log(err);
  //   console.log('Found data at Controller ===>', data);
  //   if(!value){
  //     let success = cache.set( query, data, 10000);
  //     res.send(data);
  //   }
  // });

});

let dummy = () =>{
  data.DefinitionSource = null;
  data.AbstractText = '';
  data.RelatedTopics = new Array();
  let topic = {};
  topic.Result = null;
  topic.FirstURL = null;
  topic.Text = null;
  return data;
}
