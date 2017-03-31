"use strict";

const loki = require('loki');
const db = new loki('loki.json');

module.exports = db.addCollection('patttern');
