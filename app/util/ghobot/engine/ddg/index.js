'use strict';

const EventEmitter = require('events').EventEmitter;
const DDG = require('./ddg');
const ddg = new DDG();

let Engine = (function () {

	const _act = (query, callback) => {

		ddg.prepareURL(query).makeRequest(function(err, body){

			let data = {};
			if(body){

				data.DefinitionSource = body.DefinitionSource;
				data.AbstractText = body.AbstractText;
				data.RelatedTopics = body.RelatedTopics;
				data.Image = body.Image;
				data.Heading = body.Heading;

				if(callback) callback(err,data);

			}


		});

	}
	const _capability = () => {

		let cap = [
				"Ask what something is like 'What is DNA'?",
				"Ask where something is like 'Where is China'?",
				"Ask about a person like 'Who is Bill Gates'?",
				"Say a movie/person/location name like 'Braveheart' to get information about that entity",
				"Say a something like 'simpsons characters' to get information about that phrase",
		];

		return cap;

	}


	class Engine extends EventEmitter {


	 	constructor() {
	    	super();
	    	this.on('error', this.printStack);

	    }

	    printStack(error){
	    	console.log(error.stack);
	    }

		interceptor (query){
			return undefined;
		}

		listen (query,callback){

			if(query) {
				this.query = query;
			}
			else{
				this.emit('error',new Error('DDG/index: =====> No query provided!'));
			}

			if(callback) {
				_act(query,callback);
			}
			else{
				this.emit('error',new Error('DDG/index: =====> no callback provided!'));
			}
			return this;
		}
		capabilities(){
			return _capability();
		}


	}
	return Engine;

})();

module.exports = Engine;
