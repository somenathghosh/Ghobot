'use strict';

var ddg = require('ddg');

class Engine {
	static act (query, callback){

		ddg.prepareURL('tagore').makeRequest(function(err, body){
			
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