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

    let tasks = new Array();

    _engines.forEach(function(_e){
      tasks.push(function(callback){
          _e.listen(query,function(err,data){

          });
      });
    });

  }

  let _capability = () => {
    let cap = new Array();
    console.log(_engines);
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

      //console.log(engines);
      let x = new DDG();
      let y = new DDGS();
      let z = new DDGR();
      //let a =[x,y,z];
      //console.log(a);
      console.log(engines.length);
      for(let i=0; i< engines.lenth; i++){

        console.log(engines[i]);
        if(engines[i] === 'DDGR') {
          console.log('DDGR');
          _engines.push(z);
        }
        if(engines[i] === 'DDGS') _engines.push(y);
        if(engines[i] === 'DDG') _engines.push(x);

      }


      console.log(_engines);

      return this;

    }

    start(){

      // for(let i=0; i<=this.Engines.lenth; i++){
      //   _engines[i] = new this.Engines[i]();
      // }
      // console.log(_engines);
      return this;


    }

    listen(queries){




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
