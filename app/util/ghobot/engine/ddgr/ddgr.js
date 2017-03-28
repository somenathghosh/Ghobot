'use strict';

var events = require('events');
var Patterns = require('./pattern');
var DDGR = function(){
    events.EventEmitter.call(this);
    this.patterns = new Array();
}
require('util').inherits(DDGR, events.EventEmitter);



DDGR.prototype.addPattern = function(callback) {

	var p = new Patterns();

	p.get(function (err, patterns) {

		if(err) this.emit('error', err);
		if(!patterns) this.emit('error', new Error('No Patterns'));
		if(patterns){

			patterns.forEach(function(element,index){
				try {
					var ele = JSON.parse(element);
					this.addPatternObject(ele);
				}
				catch (err){
					this.emit('error', new Error('JSON Parse error for patterns'));
				}
			});

		}
		
		
	});
};

DDGR.prototype.addPatternObject = function(element,callback) {
	
	this.patterns.push(element);

	if(callback) callback();

};


DDGR.prototype.getCommandDescription = function(callback) {
	// body...

};