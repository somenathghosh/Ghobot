"use strict";

const loki = require('lokijs');
const db = new loki('loki.json');

module.exports = db.addCollection('patttern');
