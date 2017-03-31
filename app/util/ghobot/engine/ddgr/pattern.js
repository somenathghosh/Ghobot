
'use strict';
const EventEmitter = require('events').EventEmitter;

let Pattern = (function(){

	class Pattern extends EventEmitter {

		constructor(pattern,cb) {
	    	super();
	    	this.on('error', this.printStack);
	    	this.on('data', this.success);
				this.regexp = null;
				this.actionKey = null;
				this.actionValue = undefined;
				this.description = null;
				this.callback = undefined;
				this.suggestion = null;
				this.add(pattern, cb);

	    }

	    success(data) {
	    	if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
	    	else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

	    }
	    printStack(error){
	    	console.log(error.stack);
	    }

			add(pattern, cb) {

				if(pattern) {

					if(pattern.regexp && pattern.actionKey && pattern.description) {
						this.regexp = pattern.regexp;
						this.actionKey = pattern.actionKey;
						this.description = pattern.description;
					}
					else {
						this.emit('error', new Error('Missing value in Pattern'));
					}
					if(pattern.actionValue) this.actionValue = pattern.actionValue;
					if(pattern.callback) this.callback = pattern.callback;
					if(pattern.suggestion) this.suggestion = pattern.suggestion;
				}
				if(!pattern) this.emit('error', new Error('DDGR/pattern/add: =====> No Pattern is provided'));
				if(cb) cb();

				return this;
			}



	}
	return Pattern;


})();

module.exports = Pattern
