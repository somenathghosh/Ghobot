var version = "0.0.2"; 
var request = require('request'); 
var url = require('url');

var DDG = function (argument) {

	// Library of fields that the Duck Duck Go API supports
	var fields = ["Abstract", "AbstractText", "AbstractSource", "AbstractURL", "Image", "Heading", "Answer", "AnswerType", "Definition", "DefinitionSource", "DefinitionURL", "RelatedTopics", "Results", "Type", "Redirect"];

	// Default options to be sent as a query to the API
	var default_options = {
		"useragent": "node-ddg v"+version,
		"format": "json",
		"pretty": "1",
		"no_redirects": "1",
		"no_html": "0",
		"skip_disambig": "0"
	};

	this.getFields= function (arg) {
		if(arg){
			return new Array[fields[arg]];
		}
		else{
			return fields;
		}
			
	}
	this.getOptions= function (arg) {
		if(arg){
			return default_options[arg];
		}
		else{
			return default_options;
		}
	}


}


DDG.prototype.prepareURL = function(query, options) {
	if(options){
		this.URL = 'http://api.duckduckgo.com/?format='+options.format+'&pretty='+options.pretty+'&q=' + encodeURIComponent(query);
	}
	else
	{
		this.URL = 'http://api.duckduckgo.com/?format='+this.getOptions("format")+'&pretty='+this.getOptions("pretty")+'&q=' + encodeURIComponent(query);	
	}
	
	return this;
};

DDG.prototype.makeRequest = function(callback,field) {

	this.body = undefined;
	var self = this;

	request(self.URL, function(err, response, body){

		if (err) console.log(err);

		if (response.statusCode === 200) {
			try {
				self.body = JSON.parse(body);
				if (callback) {
					if (field) {
						callback(err, self.body[field]);
						//return self;
					}
					else {
						callback(err, self.body);
						//return self;
					}
				} else {
					return self;
				}
			}
			catch(error){
				console.log('There is a problem in the response, we are not able to parse!');
				if(callback) callback(error,undefined);
				self.error = error;
				console.log(error);
			}

		} else if (response.statusCode === 500) {
			console.log("node-ddg error: server error");
			if(callback) callback(error,undefined);
			self.error = response.statusCode;
			return self;
		} else {
			console.log("node-ddg error: problem with request code: "+response.statusCode);
			if(callback) callback(error,undefined);
			self.error = response.statusCode
			return self;
		}

	});

	return this;
	
};

DDG.prototype.body_parser = function(callback,arg) {

	try{
		if(arg){
			callback(err,this.body[arg]);
		}
		else {
			callback(err, this.body);
		}
	}
	catch(err){
		callback(err,body);
	}

	return this;
	
	
};



// ddg
// .prepareURL('tagore')
// .makeRequest(function(err, body){
//     return body;
// });


module.exports = new DDG();
