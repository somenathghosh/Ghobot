'use strict';

const Cache = require( "node-cache" );
//const Cache = new NodeCache();

module.exports = (() => {

  let cache = new Cache();

  return {
    new: () =>{
      if(!cache) {
        console.log('creating new cache');
        return new Cache();
      }
      else {
        console.log('returning already created cache');
        return cache;
      }

    }

  }

})();
