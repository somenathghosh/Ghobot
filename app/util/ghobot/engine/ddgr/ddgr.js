'use strict';

// /////////////////
// @Import Libs //
// /////////////////
const EventEmitter = require('events').EventEmitter;
const PatternCollection = require('../../../mdb');
const winston = require('winston');
const console = {};

/**
 * [overrider - Console property]
 */

console.log = winston.info;
console.error = winston.error;

/**
 * [DDGR - RegEX Engine. The main engine to parse and understand user input.
 * The better the regEx, the best is performance]
 * @method
 * @return  {[Engine]}   [description]
 * This is a ECMA6 Class.
 * @author Somenath Ghosh
 * @version [0.1.0]
 * @date    2017-04-15
 */

let DDGR = (function() {
  /**
   * [Patterns description]
   * @type {Array}
   */
  class DDGR extends EventEmitter {

    /**
     * [constructor description]
     * @method  constructor
     */
    constructor() {
      super();
      this.on('error', this.printStack);
      this.on('data', this.success);
      this.Patterns = [];
    }
    /**
     * [success description]
     * @method  success
     * @param   {[type]}   data [description]
     */
    success(data) {
      if(data) console.log('DDG/ddg/success: =====> Got the data at DDGCore');
      else console.log('DDG/ddg/success: =====> There is some problem in getting the data');
    }
    /**
     * [printStack description]
     * @method  printStack
     * @param   {[type]}   error [description]
     */
    printStack(error) {
      console.log(error.stack);
    }
    /**
     * [add description]
     * @method  add
     * @param   {[type]}   pattern [description]
     */
    add(pattern) {
      if(pattern) PatternCollection.insert(pattern);
      else{
        this.emit('error',
        new Error('DDGG/ddgr/add: ======> No Pattern Provided'));
      }
    }
    /**
     * [getAll description]
     * @method  getAll
     * @return  {[type]}   [description]
     */
    getAll() {
      let p = PatternCollection.find({});
      return p;
    }
    /**
     * [get description]
     * @method  get
     * @param   {Function} callback [description]
     */
    get(callback) {
      // body implement
    }
  }
  return DDGR;
})();

module.exports = DDGR;
