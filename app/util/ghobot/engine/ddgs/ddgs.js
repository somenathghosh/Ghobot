'use strict';

const request = require('request');
const cheerio = require('cheerio');
const EventEmitter = require('events').EventEmitter;
const config = require('../../../../../config/config');

class DDGS extends EventEmitter {

  constructor() {
      super();
      this.on('error', this.printStack);

  }

  printStack(error){

    //console.log(error.name + ': ' + error.message);
    console.log(error.stack);
  }

  url() {
    return config.url['ddgs'];
  }

  search (opts, cb) {
    let urls = []
    let max = opts.max || 0

    delete opts.max

    // See https://duckduckgo.com/params for more arams

    let self = this;
    request({
      baseUrl: self.url(),
      uri: '/html',
      qs: opts
    }, (error, response, body) => {
      if(error) self.emit('error', error);
      if (!error) {
        let $ = cheerio.load(body)
        let links = $('#links .links_main a.result__a')
        links.each((i, elem) => {
          if ((max > 0 && urls.length < max) || max === 0) {
            let url = $(elem).attr('href')
            url = unescape(url.substring(url.indexOf('http')))
            urls.push(url)
          }
        })
      }
      if (cb)  cb(error, urls);
      if (!cb) self.emit('error', new Error('DDGS/ddgs/search: =====> No callback provided'));
    })
  }
}

module.exports = DDGS
