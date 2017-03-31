'use strict';

const DDGR = require('./ddgr');
const Pattern = require('./pattern');
const patterns = require('./define_pattern');

let Pfile = (function(){
  const ddgr = new DDGR();

  class Pfile {

    constructor() {

     }
     static exec (){

      //  lineReader.on('line', function (line) {
      //    console.log('Line from file:', line);
      //    ddgr.add(new Pattern(new String(line)));
      //  });

      patterns.forEach(function(ele,index){
        ddgr.add(new Pattern(ele));
      });

      //  ddgr.add(new Pattern("^(?:(?:hi)|(?:(?:hello))|(?:(?:howdy))|(?:(?:howdy my friend))|(?:(?:howdy friend))|(?:(?:hey|hey friend|hey buddy)))", "response", "howdy , friend, how are you doing?", undefined, "Say 'Good morning' to be greeted back."));
       //S
      //  ddgr.add(new Pattern("(?:(?:I am fine)|(?:(?:fine))|(?:(?:am fine))|(?:(?:I am just doing fine))|(?:(?:doing ok))|(?:(?:okay)))", "response", "okay, what can I help you with? I do answer all of your query, just ask what you are looking for", undefined, "Say 'I am fine' to be greeted back."));
       //
      //  ddgr.add(new Pattern("(?:my name is|I'm|I am) (.*)", "response", "hi $1, thanks for talking to me today", function(matches) {
      //      return (matches[1] + ' >');
      //  }, "Say 'My name is [your name]' or 'I am [name]' to be called that by the bot"));

       return ddgr;

     }


  }
  return Pfile;

})();

module.exports = Pfile
