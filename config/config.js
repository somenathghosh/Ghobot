var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI,
    url: {
      ddg: 'http://api.duckduckgo.com',
      ddgs: 'https://duckduckgo.com',
      ddgr: 'http://api.duckduckgo.com'
    }

  },

  test: {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI,
    url: {
      ddg: 'http://api.duckduckgo.com',
      ddgs: 'https://duckduckgo.com',
      ddgr: 'http://api.duckduckgo.com'
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'chatbot'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI,
    url: {
      ddg: 'http://api.duckduckgo.com',
      ddgs: 'https://duckduckgo.com',
      ddgr: 'http://api.duckduckgo.com'
    }
  }
};

module.exports = config[env];
