'use strict';

const DDGS = require('./ddgs');
const ddgs = new DDGS();
const EventEmitter = require('events').EventEmitter;

let Engine = (function(){

	const _act = (query, callback) => {

		let data = {};
		data.DefinitionSource = "";
		data.AbstractText = "";
		data.RelatedTopics = [];
		let self = this;
		ddgs.search({
						q: query,
						max: 5
				}, (err, urls) => {
						if (err) self.emit('error', err);
						if (!err) {
								//console.log(urls);
								// if(urls.length>0){
								// 	let url = urls[0];
								// 	let topic = {};
								// 	topic.Result = url;
								// 	topic.FirstURL = url;
								// 	topic.Text = '';
								// 	data.RelatedTopics.push(topic);
								// }
								for (let i = 0; i < urls.length; ++i) {

									let url = urls[i];
									let topic = {};
									topic.Result = url;
									topic.FirstURL = url;
									topic.Text = '';
									data.RelatedTopics.push(topic);

								}
								console.log(data);

								if(!callback) self.emit('error', new Error('DDGS/index/act: =====> No callback provided!'));

								if(callback) callback(err,data);

						}
		});

	}
	const _capability = () => {

		let cap = [
				"Ask anything, 'like you do search', I will try to find best result for you!"
		];

		return cap;

	}


	class Engine extends EventEmitter {

	 	constructor() {
	    	super();
	    	this.on('error', this.printStack);
	    }

	    printStack(error){

	    	//console.log(error.name + ': ' + error.message);
	    	console.log(error.stack);
	    }

		interceptor (query) {
			return undefined;
		}

		listen (query,callback){

			if(callback) {
				_act(query,callback);
			}
			else{
				this.emit('error',new Error('DDG/index/listen: =====> no callback provided!'));
			}
		}
		capabilities(){
			return _capability();
		}

	}
	return Engine;
})();


module.exports = Engine;
