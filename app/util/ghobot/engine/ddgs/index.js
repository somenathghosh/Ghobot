'use strict';

var ddgs = require('ddgs');

class Engine {
	static act (query, callback){

		let data = {};
		data.DefinitionSource = "";
		data.AbstractText = "";
		data.RelatedTopics = [];

		ddgs.search({
		        q: query,
		        max: 5
		    }, function(err, urls) {
		        if (err) console.log(err);
		        if (!err) {
		            console.log(urls);
		            
		            for (let i = 0; i < urls.length; ++i) {
		            	
		                let url = urls[i];
		                let topic = {};
		                topic.Result = '<a href="' + url + '" target="_blank" >' + url + '</a>' + '...';
		                topic.FirstURL = url;
		                topic.Text = url;
		                data.RelatedTopics.push(topic);
		                
		            }
		            
		            if(callback) callback(err,data);
		            
		        }
		});

	}

}


module.exports = Engine;