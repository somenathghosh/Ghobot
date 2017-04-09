'use strict';

const express = require('express'),
      router  = express.Router();

const url   = require('url');
const BOT   = require('../util/ghobot');
const cache = require('../util/cache');

// Think of writing query and data into file for analysis.
//const fs = require('graceful-fs');
// const logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// // use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
// logStream.write('Initial line...');
// logStream.end('this is the end line');

const ghobot = new BOT('Ghobot');

module.exports = function (app) {
  //console.log('Ghobot: I am here');
  app.get('/message', router);
};

router.get('/message', function (req, res, next) {

  //console.log(req.session.view);
  let query = url.parse(req.url,true).query;
  query = query.m;

  //let query = req.body.query.trim();
  if(query === undefined || query === null || query === ''){
    res.send(dummy());
  }

  //console.log(query);
  query = query.replace(/[\/#!$%\^&\*;?{}=\-_`~()]/g,"").replace(/[,.?!]?\s*$/, "").replace(/\s+/g, ' ').trim();
  console.log('Controller/query recieved: ===>',query);
  let value = cache.get(query);
  //console.log(value);
  if(value){
    console.log('Controller/query: ===> getting from cache');
    res.send(value);
    console.log('Controller/query: ===>', query, ' | ', value.RelatedTopics[0].Result);

  }
  else{
    //console.log('value not found');
    ghobot.talk(query, function(err, data){
      if(err) {
        console.error(err);
        res.send(dummy());
        return;
      }
      //console.log('Found data at Controller ===>', data);
      let success = cache.set(query, data, 10000);
      if(!success) console.log('not able to insert');
      res.send(data);
      console.log('Controller/query: ===>', query, ' | ', data.RelatedTopics[0] ? data.RelatedTopics[0].Result : '' );
      console.log(cache.getStats());
      return;
    });
  }


});

// let logWriter = (q,d){
//   if(app.get('env') === 'development'){
//
//   }
//   if(app.get('env') === 'production'){
//
//   }
// }

let dummy = () =>{
  let data = {};
  data.DefinitionSource = null;
  data.AbstractText = '';
  data.RelatedTopics = new Array();
  // let topic = {};
  // topic.Result = null;
  // topic.FirstURL = null;
  // topic.Text = null;
  return data;
}
