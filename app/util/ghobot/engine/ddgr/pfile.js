'use strict';

const DDGR = require('./ddgr');
const Pattern = require('./pattern');
const patterns = require('./define_pattern');

let Pfile = (function(){
  const ddgr = new DDGR();

  class Pfile {

    constructor() {

     }
     static exec (){

      for (let i = 0; i < patterns.length; i++) {
        ddgr.add(new Pattern(patterns[i]));
      }
      
       return ddgr;

     }


  }
  return Pfile;

})();

module.exports = Pfile
