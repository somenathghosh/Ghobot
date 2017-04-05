'use strict';

const EventEmitter = require('events').EventEmitter;
const request = require('request');
const url = require('url');
const config = require('../../../../../config/config');
const lda = require('lda');


class DDGCore extends EventEmitter {

	constructor() {
    	super();
    	this.on('error', this.printStack);
    	this.on('data', this.success);

    }

    success(data) {
			//console.log(data);
    	if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
    	else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

    }
    printStack(error){

    	//console.log(error.name + ': ' + error.message);
    	console.log(error.stack);
    }


	getFields (arg) {

		let fields = new Array("Abstract", "AbstractText", "AbstractSource", "AbstractURL", "Image", "Heading", "Answer", "AnswerType", "Definition", "DefinitionSource", "DefinitionURL", "RelatedTopics", "Results", "Type", "Redirect");

		if(arg){
			return new Array[fields[arg]];
		}
		else{
			return fields;
		}

	}
	getOptions (arg) {

		let default_options = {
			"useragent": "node-ddg",
			"format": "json",
			"pretty": "1",
			"no_redirects": "1",
			"no_html": "0",
			"skip_disambig": "0"
		};

		if(arg){
			return default_options[arg];
		}
		else{
			return default_options;
		}
	}

	url (){
		return config.url['ddg'];
	}

	prepareURL (query, options) {

		let q = query + ' . ';
		console.log('DDG===> query got',q);
		q = q.match( /[^\.!\?]+[\.!\?]+/g );
		console.log('DDG===> modified query got',q);

		q = lda(q, 2, 3);
		if(q.length >0 && q[0].term){
			q = q[0];
			query = q[0].term;
		}
		console.log('DDG===> LDA modified query got',q);

		console.log(query);
		if(options){
			this.URL = this.url()+'?format='+options.format+'&pretty='+options.pretty+'&q=' + encodeURIComponent(query);
		}
		else
		{
			this.URL = this.url()+'?format='+this.getOptions("format")+'&pretty='+this.getOptions("pretty")+'&q=' + encodeURIComponent(query);
		}

		return this;
	}

	makeRequest (callback,field) {

		this.body = undefined;
		let self = this;

		request(self.URL, function(err, response, body){

			if (err) this.emit('error', err);

			if(!response) {

				console.log('DDG/ddg/makeRequest: =====> No Internet Connection');
				self.emit('error', new Error('DDG/ddg/makeRequest: =====> No Internet Connection!'));
			}

			if(response){

				if (response.statusCode === 200) {

					try {
						self.body = JSON.parse(body);

						if (callback) {
							if (field) {
								callback(err, self.body[field]);

							}
							else {
								self.emit('data', self.body);
								callback(err, self.body);

							}
						} else {
							//return self;
						}
					}
					catch(error){
						this.emit('error', error);
						if(callback) callback(error,undefined);
					}

				} else if (response.statusCode === 500) {
					this.emit('error', new Error('DDG/ddg/makeRequest: =====> node-ddg error: server Internal error' + response.statusCode));

					if(callback) callback(error,undefined);

				} else {

					this.emit('error', new Error('DDG/ddg/makeRequest: =====> node-ddg error: problem with request code: '+response.statusCode));

					if(callback) callback(error,undefined);

				}
			}

		});

		return this;

	}

	body_parser (callback,arg) {

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


	}

}



module.exports = DDGCore;
