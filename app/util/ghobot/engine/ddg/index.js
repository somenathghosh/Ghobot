'use strict';

var ddg = require('./ddg');

class Engine {
	
	static interceptor (query){
		return undefined;
	}

	static listen (query,callback){
		if(callback) {
			act(query,callback);
		}
		else{
			throw new Error('no callback provided!');
		}
	}
	

	static act (query, callback){

		ddg.prepareURL(query).makeRequest(function(err, body){
			
			let data = {};
			data.DefinitionSource = body.DefinitionSource;
			data.AbstractText = body.AbstractText;
			data.RelatedTopics = body.RelatedTopics;
			data.Image = body.Image;
			data.Heading = body.Heading;

			if(callback) callback(err,data);

		});

	}

}


module.exports = Engine;