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


  let findUser = (user) => {
    console.log(user);
    if(user.toLowerCase().trim() === 'somenath.ghosh'){
      return true;
    }
    else if (user.toLowerCase().trim() === 'brandon.rodenmayer') {
      return true;
    }
    else {
      return false;
    }

  }

  let resetPassword = (user) => {
    if(findUser(user)) return 'AAAA';
    else return 'No Password';
  }

  let validateEmail = (email) => {
    if(email.toLowerCase().trim() === 'somenath.ghosh@tcs.com'){
      return true;
    }
    else if (email.toLowerCase().trim() === 'brandon.g.rodenmayer@tcs.com') {
      return true;
    }
    else {
      return false;
    }
  }

  let humanName = () => {

  }


  return [

    //1-1

    {
      "regexp":"(?:Received):\\s(?:my name is|I am|I'm|This is)?(.+?)\\s(?:Entry):\\s(Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today|Okay, please state your name)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Just for confirmation, am I speaking with "+matches[1]+" ?",["Yep", "Nope"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "ask_name"
    },

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|that is correct|you are right)\\s(?:Entry):\\s(Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay "+matches[2]+", How can I help you?",["I forgot my password","I forgot my user id","I would like to talk to an agent"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "ask_name"
    },

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|Not correct|that is not correct)\\s(?:Entry):\\s(Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay, please state your name?",["My name is ","I am "]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "positive_redirect"
    },

    {
      "regexp":"(?:Received):\\s(I would like to reset my password|reset my password|I forgot my password|forgot password|lost my password|lost password)\\s(?:Entry):\\s(?:Okay)\\s(.+)(?:, How can I help you)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay, "+matches[2] + " as I understand that you want to reset your password" + ", right?",["You are right", "Nope"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "password_reset"
    },


    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yah|Yeh|right|that is correct|you are right)\\s(?:Entry):\\s(?:Okay, )(.+)\\s(?:as I understand that you want to reset your password, right)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay, I can help with that. Before that, for verification purpose, can you please provide your user id?" ,["My user id is ","I forgot my userid "]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "password_reset"
    },

    {
      "regexp":"(?:Received):\\s(?:Nope|No|wrong|that is not correct|you are not right)\\s(?:Entry):\\s(?:Okay, )(.+)\\s(?:as I understand that you want to reset your password, right)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay "+matches[1] + ", How can I help you?" ,["I forgot my password","I forgot my user id","I would like to talk to an agent"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "password_reset"
    },

    {
      "regexp":"(?:Received):\\s(?:my user id is|my userid is|user id is|userid is)?(.+?)\\s(?:Entry):\\s(Okay, I can help with that. Before that, for verification purpose, can you please provide your user id|what is your user id)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Just for confirmation, your user id is "+matches[1]+" ,right?",["Yep", "Nope"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "password_reset"
    },


    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yah|Yeh|right|that is correct|you are right)\\s(?:Entry):\\s(?:Just for confirmation, your user id is)(.+)\\s(?:,right)",
      "actionKey": "response",
      "actionValue":"I have verified your id. You will recieve the temporary password in your registered email address.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        let u=findUser(matches[1]);
        console.log(u);
        if(u){
          cb(false, '',[])
        }
        else{
          cb(true,'I can not find your user id. Do you want to try again or want to retrieve your user id?',["Yes","I want help on retrieving my userid" ])
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Thanks for your help!", "I do not have my email address registered."],
      "classifier": "password_reset"
    },

//working
    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yah|Yeh|right|that is correct|you are right)\\s(?:Entry):\\s(?:I can not find your user id. Do you want to try again or want to retrieve your user id)",
      "actionKey": "response",
      "actionValue":"What is your user id?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"What is your user id?",["My user id is ","I forgot my userid "]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "password_reset"
    },




//olds
    {
      "regexp":"^(?:my name is|I am|I'm|This is) (.*)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Hi "+matches[1]+" ,what can I help you with?",["I forgot my password","I forgot my user id","I would like to talk to an agent"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["I forgot my password ","I forgot my userid ","I would like to register my email address "],
      "classifier": "ask_name"
    },
    //1-1-1
    {
      "regexp":"(?:I would like to reset my password|reset my password|I forgot my password|forgot password|lost my password|lost password)(.*)$",
      "actionKey": "response",
      "actionValue":"Sure, I can help with that. Before that, for verification purpose, can you please provide your user id?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[])
      },
      "description":"Say 'I forgot my password' to reset your password",
      "context": 0,
      "dsl": 3,
      "suggestion":["My user id is ","I forgot my userid " ]

    },
    //1-1-1-1
    {
      "regexp":"^(?:my user id is|my userid is |the userid is|I would like to try again, my user id is)(.*)$",
      "actionKey": "response",
      "actionValue":"Thanks for verifying your id. I would send the temporary password via your registered email address.",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        let u=findUser(matches[1]);
        //console.log(u);
        if(u){
          cb(false, '',[])
        }
        else{
          cb(true,'I can not find your user id. Do you want to try again or want to retrieve your user id?',["I would like to try again, my user id is","I want help on retrieving my userid" ])
        }
      },
      "description":"Say 'My useid is [userid]' to get your userid verified.",
      "context": 0,
      "dsl": 4,
      "suggestion":["Thanks for your help ","I do not have my email address registered "]

    },
    //1-1-[0/1]-1-1
    {
      "regexp":"(?:(?:thanks)|(?:(?:thank you))|(?:(?:thank you very much))|(?:(?:thx))|(?:(?:thank you ghobot))|(?:(?:thanks ghobot))|(?:(?:thanks for your help)))",
      "actionKey": "response",
      "actionValue":"You are welcome!",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[]);
      },
      "description":"Say 'Thanks' to end the conversation.",
      "context": 0,
      "dsl": 1000010,
      "suggestion":['bye ']
    },
    //1-1-0
    {
      "regexp":"(?:I forgot my userid|forgot userid|forgot my user id|forgot user id|I want help on retrieving my userid|forgot username)(.*)$",
      "actionKey": "response",
      "actionValue":"Sure, I can help with that. Before that, for verification purpose, can you please provide your registered email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[])
      },
      "description":"Say 'I forgot my userid' to get your userid",
      "context": 0,
      "dsl": 4,
      "suggestion":["My email address is ","I do not remember the email address " ]

    },
    //1-1-0-1
    {
      "regexp":"(?:email address is|email is)(.*)$",
      "actionKey": "response",
      "actionValue":"Thanks for providing your email address. I have verified it successfully. You will recieve your user id in that email shortly.",
      "callback":function(matches,cb) {
        'use strict';
        console.log(matches);
        let u=validateEmail(matches[1]);
        console.log(u);
        if(u){
          cb(false, '',[])
        }
        else{
          cb(true,'I can not find your email id. Do you want to try again?',["I would like to try again, my email is","I want help on retrieving my email" ])
        }
      },
      "description":"Say 'I forgot my userid' to get your userid",
      "context": 0,
      "dsl": 4,
      "suggestion":["Thanks for your help"]

    },

    //1-1-0-0
    {
      "regexp":"^(?:I do not remember the email address|recollect the email address|I would like to register my email address|I want help on retrieving my email)(.*)$",
      "actionKey": "response",
      "actionValue":"I am sorry. I would not be able to help you further.You need to call Support for further assistance.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[])
      },
      "description":"Provide your user id",
      "context": 0,
      "dsl": 4,
      "suggestion":["I want to talk to an agent","I would like to get customer care number","No problem! Thanks." ]

    },

    //1-1-0-0-1
    {
      "regexp":"(?:agent|talk to a human|talk to customer care|I need to talk to an agent|I need to talk to a person)(.*)$",
      "actionKey": "response",
      "actionValue":"Sure, I would get you connected to an agent. Please bear with me for few secs before I find one.",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches, 'hey hey');
        cb(false,'',[])
      },
      "description":"Say 'I want to talk an agent' to get connected to an agent/human.",
      "context": 0,
      "dsl": 4,
      "suggestion":["Thanks"]

    },

    //1-1-0-0-1
    {
      "regexp":"(?:I would like to get customer care number| customer care number)$",
      "actionKey": "response",
      "actionValue":"Sure, Please call 1-800-Support, We are available from 8 AM - 5 PM evey weekdays excluding Bank holidays.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[])
      },
      "description":"Say 'I would like to get customer care number' to get customer care number.",
      "context": 0,
      "dsl": 4,
      "suggestion":["Thanks!"]

    },


    // {
    //   "regexp":"(?:I would like to retrieve my userid|retrieve my userid|I forgot my userid|forgot username)(.*)$",
    //   "actionKey": "response",
    //   "actionValue":"Sure, I can help with that. Before that, for verification purpose, can you please provide your email address?",
    //   "callback":function(matches,cb) { 'use strict'; console.log(matches); cb(false,'',[])},
    //   "description":"'Provide your email address' to get your identity verified",
    //   "context": 0,
    //   "dsl": 100001,
    //   "suggestion":["my email address is","I forgot my email address" ]
    //
    // },


    {
      "regexp":"^(?:hi|hello|howdy|howdy my friend|howdy friend|hey|hey friend|hey buddy)(.*)",
      "actionKey": "response",
      "actionValue":"hello, how are you doing?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[]);
      },
      "description":"Say 'hi' to be greeted back.",
      "context": 0,
      "dsl": 10,
      "suggestion":["I am doing fine"]
    },

    {
      "regexp":"(?:(?:I am fine)|(?:(?:fine))|(?:(?:am fine))|(?:(?:I am just doing fine))|(?:(?:doing ok)))",
      "actionKey": "response",
      "actionValue":"Okay, what can I help you with? I can reset your password, retrive your userid if you forgot or register your email address",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[]);
      },
      "description":"Say 'I would like to reset my password' to reset your password.",
      "context": 0,
      "dsl": 10,
      "suggestion":["I would like to reset my password ","I would like to retrieve my user id ","I would like to register my email address "]

    },


    // {
    //   "regexp":"^(?:my email address is|my email is |the email is|the email address is) (.*)",
    //   "actionKey": "response",
    //   "actionValue":"I have verified your email address. I would send the user id via the registered email address.",
    //   "callback":function(matches,cb) { 'use strict'; console.log(matches);cb(false,'',[]);},
    //   "description":"Provide your user id",
    //   "context": 0,
    //   "dsl": 100001,
    //   "suggestion":["Thanks","I do not have my email address registered"]
    //
    // },


    {
      "regexp":"^(?:(?:bye)|(?:(?:bye bye))|(?:(?:byebye))|(?:(?:see you))|(?:(?:talk to you later))|(?:(?:ttly)))",
      "actionKey": "response",
      "actionValue":"Thank you. It was very nice talking to you. You can close the chat window.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[]);
      },
      "description":"Say 'Bye' to end the conversation.",
      "context": 0,
      "dsl": 1000010,
      "suggestion":['']
    },

    {
      "regexp":"(?:(?:kidding)|(?:(?:jokking))|(?:(?:fuck))|(?:(?:asshole))|(?:(?:pissing))|(?:(?:horrible)))",
      "actionKey": "response",
      "actionValue":"Sorry to let you know, I am bot, I do not do it.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[]);
      },
      "description":"Say 'Thanks' to end the conversation.",
      "context": 0,
      "dsl": 1000010,
      "suggestion":['']
    },
    {
      "regexp":"(?:(?:love you)|(?:(?:I love you)))",
      "actionKey": "response",
      "actionValue":"I love you too. What can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,'',[]);
      },
      "description":"Say 'Thanks' to end the conversation.",
      "context": 0,
      "dsl": 1000010,
      "suggestion":["I forgot my password ","I forgot my userid ","I would like to register my email address "]
    }


  ];

})();

module.exports = DP;
