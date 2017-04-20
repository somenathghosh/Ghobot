'use strict';

const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

/**
 * [config config module for global configuration management]
 * @type {Object}
 */

let config = {
  development: {
    root: rootPath,
    app: {
      name: 'chatbot',
    },
    port: process.env.PORT || process.env.CUSTOM_PORT,
    db: process.env.MONGODB_URI,
    url: {
      ddg: process.env.DDG_API,
      ddgs: process.env.DDGS_API,
      ddgr: process.env.DDGR_API,
    },

  },

  test: {
    root: rootPath,
    app: {
      name: 'chatbot',
    },
    port: process.env.PORT || process.env.CUSTOM_PORT,
    db: process.env.MONGODB_URI,
    url: {
      ddg: process.env.DDG_API,
      ddgs: process.env.DDGS_API,
      ddgr: process.env.DDGR_API,
    },
  },

  production: {
    root: rootPath,
    app: {
      name: 'chatbot',
    },
    port: process.env.PORT || process.env.CUSTOM_PORT,
    db: process.env.MONGODB_URI,
    url: {
      ddg: process.env.DDG_API,
      ddgs: process.env.DDGS_API,
      ddgr: process.env.DDGR_API,
    },
  },
};

module.exports = config[env];
