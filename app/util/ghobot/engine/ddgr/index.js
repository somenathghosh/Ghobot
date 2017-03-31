'use strict';

const events = require('events');
const Pattern = require('./pattern');
var ddgr = require('./ddgr');

let Engine = (function () {

	const _act = (query, callback) => {

	}

	class Engine {

		interceptor (query){
			return undefined;
		}

		listen (query,callback){
			if(callback) {
				_act(query,callback);
			}
			else{
				throw new Error('no callback provided!');
			}
		}


	}
	return Engine;

})();


module.exports = Engine;
