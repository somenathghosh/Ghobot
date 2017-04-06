'use strict';

const async = require('async');
const events = require('events');
const EventEmitter = require('events').EventEmitter;
const DDGR  = require('./ddgr');
const DDGS  = require('./ddgs');
const DDG   = require('./ddg');


let Engine = (function () {

  let _engines = new Array();

  let _act = (query,cb) =>{


    // for(let idx=0; idx < _engine.length; idx++){
    //   _engines[idx].listen(query)
    // }
    //
    // //Don't run engines in parallel, this has to be in series.
    // let tasks = new Array();
    // //console.log(_engines);
    // _engines.forEach(function(_e){
    //   tasks.push(function(callback){
    //       _e.listen(query,function(err,data){
    //         if(err) callback(err);
    //         callback(err,data);
    //       });
    //   });
    // });
    //
    // async.parallel(tasks,function(err, data){
    //   if(err) console.log(err);
    //
    //   cb(err,data);
    // });
    //implement series

    async.waterfall([

      function(callback){
        console.log('1st engine');
        _engines[0].listen(query,function(err,data){
          if(err) callback(err);
          if(data.RelatedTopics.length === 0) callback(err,data);

          if(data.RelatedTopics.length > 0) {
            //console.log('1st Engine found data ===>',data);
            callback(new Error('DataFound'), data);
          }
        });
      },
      function(arg, callback){
        if(_engines.length > 1) {
          console.log('2nd engine');
          _engines[1].listen(query,function(err,data){
            if(err) callback(err);
            //console.log(data);
            if(data.RelatedTopics.length === 0) callback(err,data);
            if(data.RelatedTopics.length > 0) {
              console.log('2nd Engine found data ===>',data);
              callback(new Error('DataFound'), data);
            }
          });
        }
        else {
          callback(new Error('NoMoreEngine'));
        }


      },
      function(arg, callback){

        if(_engines.length > 2) {
          console.log('3rd engine');
          _engines[2].listen(query,function(err,data){
            if(err) callback(err);
            if(data.RelatedTopics.length === 0) callback(err,data);
            //console.log(data);
            if(data.RelatedTopics.length > 0) {
              console.log('3rd Engine found data ===>',data);
              callback(new Error('DataFound'), data);
            }
          });
        }
        else {
          callback(new Error('NoMoreEngine'));
        }
      }
      //Add Engines here
      // function(arg, callback){
      //   console.log('4th engine');
      //   if(_engines.length > 3) {
      //
      //     _engines[3].listen(query,function(err,data){
      //       if(err) callback(err);
      //       if(data.RelatedTopics.length === 0) callback(err,data);
      //       if(data.RelatedTopics.length > 0) callback(new Error('DataFound'), data);
      //     });
      //   }
      //   else {
      //     callback(new Error('NoMoreEngine'));
      //   }
      // }

    ],function (err, data){
        //console.log('callback', err, data);
        if(err.message === 'DataFound') {
          //console.log('Data found from all engines====>', data);
          cb(null,data);
        }
        else if(err.message === 'NoMoreEngine') cb(null,{RelatedTopics:[]});
        else cb(err, null);
    });

  }

  let _capability = () => {
    let cap = new Array();
    //console.log(_engines);
    for (let i=0; i<_engines.length; i++){
      cap.push(_engines[i].capabilities());
    }
    return cap;
  }





  class Engine extends EventEmitter {

   constructor() {
    	super();
    	this.on('error', this.printStack);
    	this.on('data', this.success);
      //this.Engines = new Array();
    }

    success(data) {


    }
    printStack(error){
      console.log(error.stack);
    }


    require(engines){

      let tasks = new Array();

      engines.forEach(function(ele){
        tasks.push(function(callback){
          if(ele === 'DDGR') _engines.push(new DDGR());
          if(ele === 'DDGS') _engines.push(new DDGS());
          if(ele === 'DDG') _engines.push(new DDG());
          callback();
        });

      });

      async.parallel(tasks,function(){
        console.log('Engines are started');
        //console.log(_engines);

      });
      return this; //handle async well..this will fail if engines takes time to init.

    }

    start(){

      return this;


    }

    listen(query,callback){
      _act(query,callback);

    }
    capabilities(){
      return _capability();
    }

  }
  return Engine;

})();

module.exports = Engine

// return new Promise(
//   function (resolve, reject){
//
//     resolve(res);
//
//     reject(err);
//
//
//   }
//
// );
