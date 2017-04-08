
'use strict';
//const EventEmitter = require('events').EventEmitter;
const winston = require('winston');
const console = {};
console.log = winston.info;

let Pattern = (function(){

	class Pattern {

		constructor(pattern) {
	    	//super();
	    	//this.on('error', this.printStack);
	    	//this.on('data', this.success);
				this.regexp = null;
				this.actionKey = null;
				this.actionValue = undefined;
				this.description = null;
				this.callback = undefined;
				this.dsl = 0;
				this.suggestion = null;
				this.left = null;
				this.right = null;
				this.add(pattern);

	    }

	    // success(data) {
			// 	//body
			//
	    // }
	    // printStack(error){
	    // 	console.log(error.stack);
	    // }

			add(pattern) {

				if(!pattern) console.log('DDGR/pattern/add: =====> No Pattern is provided');

				if(pattern) {

					if(pattern.regexp && pattern.actionKey && pattern.description && pattern.dsl && pattern.callback) {
						this.regexp = pattern.regexp;
						this.actionKey = pattern.actionKey;
						this.description = pattern.description;
						this.dsl = pattern.dsl;
						this.callback = pattern.callback;
					}
					else {
						console.log(pattern);
						console.log('DDGR/pattern/add: =====> Expected values in Pattern is missing');
					}
					if(pattern.actionValue) this.actionValue = pattern.actionValue;
					//if(pattern.callback) this.callback = pattern.callback;
					if(pattern.suggestion) this.suggestion = pattern.suggestion;
				}
				//if(cb) cb();

				return this;
			}



	}
	return Pattern;


})();

module.exports = Pattern
