'use strict';

const DDGR = require('./ddgr');
const Pattern = require('./pattern');
const patterns = require('./define_pattern_1');
const winston = require('winston');
const console = {};
console.log = winston.info;

let Pfile = (function(){
  const ddgr = new DDGR();

  class Pfile {

    constructor() {

     }
     static exec (){

      for (let i = 0; i < patterns.length; i++) {
        try{
          let r = new RegExp(patterns[i].regexp,"i");
          if(!r.test('dummy')) console.log('Checked -' + i);
          ddgr.add(new Pattern(patterns[i]));
        }
        catch(e){
          console.log(e);
          throw new Error('RegEx Error at pattern number: '+i +' Server can not be started');
        }

      }

       return ddgr;

     }


  }

  return Pfile;

})();

module.exports = Pfile
