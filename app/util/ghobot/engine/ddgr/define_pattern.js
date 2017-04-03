//Add your patterns here
//how to add --
/*

Add it anywhere, it should go in way of active conversation!
This make a neural network of scripts.

*/

//


// {
//   "regexp":"^Welcome to HL bot services. My name is Ghobot. whom am I talking to today?$",
//   "actionKey": "response",
//   "actionValue":"",
//   "callback":undefined,
//   "description":"",
//   "context": 0,
//   "dsl": 0, //0 === left|root , 1 === right
//   "suggestion":["my name is"]
// },


module.exports = [

  {
    "regexp":"^(?:my name is|name is) (.*)",
    "actionKey": "response",
    "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
    "callback":function(matches) {return (matches[1]);},
    "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
    "context": 0,
    "dsl": 1,
    "suggestion":["I would like to reset my password","I would like to retrieve my user id","I would like to register my email address"]
  },

  {
    "regexp":"(?:I would like to reset my password|reset my password|password)$",
    "actionKey": "response",
    "actionValue":"Sure, I can help with that. Before that, for verification purpose, can you please provide your user id?",
    "callback":undefined,
    "description":"Provide your user id",
    "context": 0,
    "dsl": 100001,
    "suggestion":["I would like to try again, my user id is","I wan help on retrieving my userid" ]

  },

  {
    "regexp":"^(?:hi|hello|howdy|howdy my friend|howdy friend|hey|hey friend|hey buddy)(.*)",
    "actionKey": "response",
    "actionValue":"hello, how are you doing?",
    "callback":undefined,
    "description":"Say 'hi' to be greeted back.",
    "context": 0,
    "dsl": 10,
    "suggestion":["I am doing fine"]
  },

  {
    "regexp":"(?:(?:I am fine)|(?:(?:fine))|(?:(?:am fine))|(?:(?:I am just doing fine))|(?:(?:doing ok))|(?:(?:okay)))",
    "actionKey": "response",
    "actionValue":"Okay, what can I help you with? I can reset your password, retrive your userid if you forgot or register your email address",
    "callback":undefined,
    "description":"Say 'I would like to reset my password/retrieve userid/register email address' to reset your password.",
    "context": 0,
    "dsl": 010,
    "suggestion":["I would like to reset my password","I would like to retrieve my user id","I would like to register my email address"]

  },


  {
    "regexp":"^(?:my user id is|my userid is |the userid is) (.*)",
    "actionKey": "response",
    "actionValue":"I can not find your user id. Do you want to try again or want to retrieve your user id?",
    "callback":function(matches) {return findUser(matches[1]);},
    "description":"Provide your user id",
    "context": 0,
    "dsl": 100001,
    "suggestion":["I would like to try again, my user id is","I wan help on retrieving my userid" ]

  },


  {
    "regexp":"^(?:(?:bye)|(?:(?:bye bye))|(?:(?:byebye))|(?:(?:see you))|(?:(?:talk to you later))|(?:(?:ttly)))",
    "actionKey": "response",
    "actionValue":"Thank you. It was very nice talking to you.",
    "callback":undefined,
    "description":"Say 'Bye' to end the conversation.",
    "context": 0,
    "dsl": 1000010,
    "suggestion":['']
  }

];


//context
//dsl
