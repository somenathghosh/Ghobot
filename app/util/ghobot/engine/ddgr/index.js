'use strict';

const events = require('events');
const EventEmitter = require('events').EventEmitter;
const Pfile = require('./pfile');
const ddgr = Pfile.exec();

let Engine = (function () {

	//dummy
	const findUser = (user) => {

		if(new String().toUpperCase(user) === 'SOMENATH'){
			return true;
		}
		else if (new String().toUpperCase(user) === 'BRANDON') {
			return true;
		}
		else {
			return false;
		}

	}

	const resetPassword = (user) => {
		if(findUser(user)) return 'AAAA';
		else return 'No Password';
	}


	//dummy end
	const _act = (text, callback) => {

		let patterns = ddgr.getAll();

		for (var i = 0; i < patterns.length; i++) {
				let pattern = patterns[i];
				let r = new RegExp(pattern.regexp, "i");
				let matches = text.match(r);
				//console.log(matches);
				if (matches) {
						switch (pattern.actionKey) {
								case 'rewrite':
										text = pattern.actionValue;
										for (let j = 1; j < matches.length; j++) {
												text = text.replace("$" + j, matches[j]);
										}
										callback(text,null);
										if (pattern.callback !== undefined) {
												pattern.callback.call(this, matches);
										}
										break;
								case 'response':

										let response = pattern.actionValue;
										let suggestion = pattern.suggestion;
										if (response !== undefined) {
												for (let j = 1; j < matches.length; j++) {
														response = response.replace("$" + j, matches[j]);
												}
												callback(response,suggestion);
										}
										if (pattern.callback !== undefined) {
												pattern.callback.call(this, matches);
										}
						}
						break;
				}
		}

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
