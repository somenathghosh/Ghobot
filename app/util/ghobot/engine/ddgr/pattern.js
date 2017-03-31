
'use strict';
const EventEmitter = require('events').EventEmitter;

class Pattern extends EventEmitter {

	constructor(regexp,actionKey,actionValue,callback,description, cb) {
    	super();
    	this.on('error', this.printStack);
    	this.on('data', this.success);
			this.regexp = null;
			this.actionKey = null;
			this.actionValue = undefined;
			this.description = null;
			this.callback = undefined;
			this.add(regexp,actionKey,actionValue,callback,description, cb);

    }

    success(data) {
    	if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
    	else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

    }
    printStack(error){
    	console.log(error.stack);
    }

		add (regexp,actionKey,actionValue,callback,description, cb) {

			if(regexp && actionKey && description) {
				this.regexp = regexp;
				this.actionKey = actionKey;
				this.description = description;
			}
			else {
				this.emit('error', new Error('Missing value in Pattern'));
			}
			if(actionValue) this.actionValue = actionValue;
			if(callback) this.callback = callback;

			if(cb) cb();

			return this;
		}


}

module.exports = Pattern
