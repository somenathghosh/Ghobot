'use strict';

const Engine = require('./engine');
const engine = new Engine();
const EventEmitter = require('events').EventEmitter;


let BOT = (function () {

  const _engine = engine.require(new Array('DDGR','DDG')).start();
  const _talk = (q,cb) => {
    if(!q){
      cb(new Error('Query Value is Invalid'));
    }
    else {
      if(typeof cb === 'function' ){
        engine.listen(q,cb);
      }
      else{
        cb(new Error('Callback is NOT a function'));
      }

    }
  }

  class BOT extends EventEmitter {

    constructor(name) {
        super();
        this.on('error', this.printStack);
        this.name = name;
        this.humanname = 'You';

    }

    printStack(error){
      console.log(error.stack);
    }

    name(_name){
      this.name = _name;
      return this;
    }

    talk(text, callback){
      _talk(text,callback);
    }
    humanname(_name){
      this.humanname = _name;
    }

    capabilities(){
      return _engine.capabilities();
    }

  }

  return BOT;

})();

module.exports = BOT;
