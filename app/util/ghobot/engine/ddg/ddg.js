'use strict';

const EventEmitter = require('events').EventEmitter;
const request = require('request');
const url = require('url');
const config = require('../../../../../config/config');
const lda = require('lda');
const jsonpointer = require('jsonpointer');


let DDG = (() => {

	let _dummy = () => {
		let data = {};
		data.DefinitionSource = null;
		data.AbstractText = '';
		data.RelatedTopics = new Array();
		// let topic = {};
		// topic.Result = null;
		// topic.FirstURL = null;
		// topic.Text = null;
		return data;
	}

	let _findRelatedTerms = (q) =>{
		for(let _q of q){

			//TODO to extract keywords
		}

	}

	class DDG extends EventEmitter {

		constructor() {
			super();
			this.on('error', this.printStack);
			this.on('data', this.success);

		}

		success(data) {
			//console.log(data);
			if (data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
			else console.log('DDG/ddg/success: =====> There is some problem in getting the data');

		}
		printStack(error) {

			//console.log(error.name + ': ' + error.message);
			console.log(error.stack);
		}


		getFields(arg) {

			let fields = new Array("Abstract", "AbstractText", "AbstractSource", "AbstractURL", "Image", "Heading",
				"Answer", "AnswerType", "Definition", "DefinitionSource", "DefinitionURL", "RelatedTopics", "Results",
				"Type", "Redirect");

			if (arg) {
				return new Array[fields[arg]];
			} else {
				return fields;
			}

		}
		getOptions(arg) {

			let default_options = {
				"useragent": "node-ddg",
				"format": "json",
				"pretty": "1",
				"no_redirects": "1",
				"no_html": "0",
				"skip_disambig": "0"
			};

			if (arg) {
				return default_options[arg];
			} else {
				return default_options;
			}
		}

		url() {
			return config.url['ddg'];
		}

		prepareURL(query, options) {

			let r = RegExp("(?:Received):\\s(.+)\\s(?:Entry):\\s(.+)", "i");
			//console.log(r);
			let matches = query.match(r);
			console.log(matches);
			let q = matches[1] + ' . ';
			console.log('DDG===> query got', q);
			q = q.match(/[^\.!\?]+[\.!\?]+/g);
			console.log('DDG===> modified query got', q);

			q = lda(q, 2, 3);
			q = [].concat.apply([], q);
			console.log(q);
			if (q.length > 0 && q[0].term) {
				query = q[0].term;
			}
			console.log('DDG===> LDA modified query got', query);
			if (query.length === 0) {
				this.URL = "";
				return this;
			}
			//console.log(query);
			if (options) {
				this.URL = this.url() + '?format=' + options.format + '&pretty=' + options.pretty + '&q=' +
					encodeURIComponent(query);
			} else {
				this.URL = this.url() + '?format=' + this.getOptions("format") + '&pretty=' + this.getOptions("pretty") +
					'&q=' + encodeURIComponent(query);
			}

			return this;
		}

		makeRequest(callback, field) {

			this.body = undefined;
			let self = this;
			if (self.URL === "") {

				callback(err, _dummy());

			}
			request(self.URL, function(err, response, body) {

				if (err) {
					if (typeof callback === 'function') callback(undefined, _dummy());
					console.error('DDG/ddg/makeRequest: =====> ', err);
					return;
					//this.emit('error', err);

				}

				if (!response) {
					if (typeof callback === 'function') callback(err, _dummy());
					console.error('DDG/ddg/makeRequest: =====> No Internet Connection');
					//self.emit('error', new Error('DDG/ddg/makeRequest: =====> No Internet Connection!'));
					return;
				}

				if (response) {

					if (response.statusCode === 200) {

						try {
							self.body = JSON.parse(body);

							if (typeof callback === 'function') {
								if (field) {
									callback(err, self.body[field]);
									return;

								} else {
									//self.emit('data', self.body);
									callback(err, self.body);
									return;

								}
							} else {
								//return self;
							}
						} catch (error) {
							//this.emit('error', error);
							console.error('DDG/ddg/makeRequest: =====> ', error);
							if (typeof callback === 'function') callback(undefined, _dummy());
							return;
						}

					} else if (response.statusCode === 500) {
						if (typeof callback === 'function') callback(undefined, _dummy());
						console.error('DDG/ddg/makeRequest: =====> ',
							'DDG/ddg/makeRequest: =====> node-ddg error: server Internal error: ' + response.statusCode);
						return;
						//this.emit('error', new Error('DDG/ddg/makeRequest: =====> node-ddg error: server Internal error' + response.statusCode));


					} else {

						if (typeof callback === 'function') callback(undefined, _dummy());
						//this.emit('error', new Error('DDG/ddg/makeRequest: =====> node-ddg error: problem with request code: '+response.statusCode));
						console.error('DDG/ddg/makeRequest: =====> ',
							'DDG/ddg/makeRequest: =====> node-ddg error: problem with request code: ' + response.statusCode);
						return;


					}
				}

			});

			return this;

		}

		body_parser(callback, arg) {

			try {
				if (arg) {
					if (typeof callback === 'function') callback(err, this.body[arg]);
				} else {
					if (typeof callback === 'function') callback(err, this.body);
				}
			} catch (err) {
				if (typeof callback === 'function') callback(err, body);
			}

			return this;


		}

	}

	return DDG;

})();





module.exports = DDG;
