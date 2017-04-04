//Add your patterns here
//how to add --
/*

Add it in way of active conversation! The same will be used for making a neural network of scripts.
Take caution while defining dsl. Based on input/output, you either lead the conversation go left or right.

*/

//

//Sample

// {
//   "regexp":"^Welcome to HL bot services. My name is Ghobot. How can I help you today?$", //mandatory
//   "actionKey": "response", //mandatory
//   "actionValue":"",
//   "callback":function(matches,cb){}, //mandatory
//   "description":"", //mandatory
//   "context": 0,
//   "dsl": 10, //10 === left|root , 11 === right //mandatory
//   "suggestion":[]
// },



'use strict';


let DP = (function(){


  const findUser = (user) => {

    if(user.toUpperCase() === 'SOMENATH'){
      return true;
    }
    else if (user.toUpperCase() === 'BRANDON') {
      return true;
    }
    else {
      return false;
    }

  }

  const resetPassword = (user) => {
    if(findUser(user)) return 'AAAA';
    else return 'No Password';
  }


  return [

    {
      "regexp":"^(?:my name is|name is) (.*)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(true,"hi "+matches[1]+" ,thanks for talking to me today, what can I help you with?",["I would like to reset my password","I forgot my user id","I would like to register my email address"])},
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "context": 0,
      "dsl": 1,
      "suggestion":["I would like to reset my password","I forgot my user id","I would like to register my email address"]
    },

    {
      "regexp":"(?:I would like to reset my password|reset my password|I forgot my password|forgot password)$",
      "actionKey": "response",
      "actionValue":"Sure, I can help with that. Before that, for verification purpose, can you please provide your user id?",
      "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
      "description":"Provide your user id",
      "context": 0,
      "dsl": 100001,
      "suggestion":["my user id is","I forgot my userid" ]

    },

    {
      "regexp":"^(?:hi|hello|howdy|howdy my friend|howdy friend|hey|hey friend|hey buddy)(.*)",
      "actionKey": "response",
      "actionValue":"hello, how are you doing?",
      "callback":function(matches,cb) { 'use strict'; console.log(matches);cb(false,'',[]);},
      "description":"Say 'hi' to be greeted back.",
      "context": 0,
      "dsl": 10,
      "suggestion":["I am doing fine"]
    },

    {
      "regexp":"(?:(?:I am fine)|(?:(?:fine))|(?:(?:am fine))|(?:(?:I am just doing fine))|(?:(?:doing ok))|(?:(?:okay)))",
      "actionKey": "response",
      "actionValue":"Okay, what can I help you with? I can reset your password, retrive your userid if you forgot or register your email address",
      "callback":function(matches,cb) { 'use strict'; console.log(matches);cb(false,'',[]);},
      "description":"Say 'I would like to reset my password/retrieve userid/register email address' to reset your password.",
      "context": 0,
      "dsl": 10,
      "suggestion":["I would like to reset my password","I would like to retrieve my user id","I would like to register my email address"]

    },


    {
      "regexp":"^(?:my user id is|my userid is |the userid is) (.*)",
      "actionKey": "response",
      "actionValue":"Thanks for verifying your id. I would send the temporary password via your registered email address.",
      "callback":function(matches,cb) { 'use strict'; console.log(matches); let u=findUser(matches[1]);console.log(u);if(u){cb(false, '',[])} else{cb(true,'I can not find your user id. Do you want to try again or want to retrieve your user id?',["I would like to try again, my user id is","I want help on retrieving my userid" ])}},
      "description":"Provide your user id",
      "context": 0,
      "dsl": 100001,
      "suggestion":["Thanks!","I don't have my email address registered"]

    },


    {
      "regexp":"^(?:(?:bye)|(?:(?:bye bye))|(?:(?:byebye))|(?:(?:see you))|(?:(?:talk to you later))|(?:(?:ttly)))",
      "actionKey": "response",
      "actionValue":"Thank you. It was very nice talking to you.",
      "callback":function(matches,cb) { 'use strict'; console.log(matches);cb(false,'',[]);},
      "description":"Say 'Bye' to end the conversation.",
      "context": 0,
      "dsl": 1000010,
      "suggestion":['']
    },
    {
      "regexp":"^(?:(?:Thanks)|(?:(?:Thank you))|(?:(?:Thank you very much))|(?:(?:Thx))|(?:(?:Thank you ghobot))|(?:(?:Thanks ghobot)))",
      "actionKey": "response",
      "actionValue":"You are welcome! It was very nice talking to you.",
      "callback":function(matches,cb) { 'use strict'; console.log(matches);cb(false,'',[]);},
      "description":"Say 'Thanks' to end the conversation.",
      "context": 0,
      "dsl": 1000010,
      "suggestion":['']
    }

  ];

})();

module.exports = DP;
