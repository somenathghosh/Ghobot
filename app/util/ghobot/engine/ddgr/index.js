'use strict';

const events = require('events');
const Pattern = require('./pattern');
const EventEmitter = require('events').EventEmitter;
//const ddgr = require('./ddgr');
const Pfile = require('./pfile');

const ddgr = Pfile.exec();





let Engine = (function () {

	const _act = (text, callback) => {

// 		for (var i = 0; i < patterns.length; i++) {
// 				var pattern = patterns[i];
// 				var r = new RegExp(pattern.regexp, "i");
// 				var matches = text.match(r);
// 				//console.log(matches);
// 				if (matches) {
// 						switch (pattern.actionKey) {
// 								case 'rewrite':
// 										text = pattern.actionValue;
// 										for (var j = 1; j < matches.length; j++) {
// 												text = text.replace("$" + j, matches[j]);
// 										}
// 										//console.log("rewritten to " + text);
// 										if (pattern.callback !== undefined) {
// 												pattern.callback.call(this, matches);
// 										}
// 										break;
// 								case 'response':
// //                                var response = text.replace(r, pattern.actionValue);
// 										var response = pattern.actionValue;
// 										if (response !== undefined) {
// 												for (var j = 1; j < matches.length; j++) {
// 														response = response.replace("$" + j, matches[j]);
// 												}
// 												this.addChatEntry(response, "bot");
// 										}
// 										if (pattern.callback !== undefined) {
// 												pattern.callback.call(this, matches);
// 										}
// 										return;
// 						}
// 						break;
// 				}
// 		}
	 let p = ddgr.getAll();

	 callback(undefined,p);


	}

	class Engine extends EventEmitter {


   constructor() {
    	super();
    	this.on('error', this.printStack);
    	this.on('data', this.success);
    }

    success(data) {
      if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
      else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

    }
    printStack(error){
      console.log(error.stack);
    }

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
