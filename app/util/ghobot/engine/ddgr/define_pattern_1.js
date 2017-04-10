
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
    //Gb> Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today? | Okay, please state your name.
    //You> Somenath

    {
      "regexp":"(?:Received):\\s(?:(?:hi|hello|hey|howdy)?\\s(?:bot|ghobot)?,\\s)?(?:my name is|I am|I'm|This is|This side|here is)?(?:\\s?)(.+?)(?:\\s(?:.+?))?\\s(?:Entry):\\s(?:(?:Welcome to HL bot services. My name is Ghobot.\\s)?Whom am I speaking with today|(?:(?:Okay,\\s)?(?:please state your name)))",
      "actionKey": "response",
      "actionValue":"",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Just for confirmation, am I speaking with "+matches[1]+" ?",["Yep", "Nope"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":[],
      "classifier": "ask_name"
    },

    //Gb> Just for confirmation, am I speaking with Somenath?
    //You> Yep
    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"Okay $1, how can I help you?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay "+matches[1]+", how can I help you?",["I forgot my password","I forgot my user id","I would like to talk to an agent"]);
      },
      "description":" ",
      "dsl": 2,
      "suggestion":["I forgot my password","I forgot my user id","I would like to talk to an agent"],
      "classifier": "positive_redirect"
    },



    //Just for confirmation, am I speaking with Somenath?
    //Yep


    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:that is\\s|you are\\s)?not (?:correct|right))\\s(?:Entry):\\s(?:Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay, please state your name?",["My name is ","I am "]);
      },
      "description":" ",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "negetive_redirect"
    },

    //Okay Somenath, how can I help you? | Okay, how can I help you?
    //I would like to reset my password

    {
      "regexp":"(?:Received):\\s(?:(?:(?:I\\s)?(?:would like to\\s)?)?(?:reset|forgot|lost|recover)\\s(?:my\\s)?(?:password|passcode))\\s(?:Entry):\\s(?:Okay)((\\s.+)?)(?:, how can I help you)",
      "actionKey": "response",
      "actionValue":"Okay, as I understand that you want to reset your password , right?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay, as I understand that you want to reset your password, right?",["You are right", "Nope"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Right", "Nope"],
      "classifier": "password_reset"
    },

    //Gb> Okay Somenath, how can I help you? | For verification, what is the email address registered with us?
    //You> I would like to talk to an agent

    {
      "regexp":"(?:Received):\\s(?:(?:(?:(?:I\\s)?would like to talk to (?:an\\s)?)?(?:agent|customer care|representative))|(?:(?:please\\s)?connect me to (?:an\\s)?(?:agent|customer care|representative))|((?:(?:(?:I\\s)?do not remember|I do not have access to) the email)(?:\\saddress)?))\\s(?:Entry):\\s(?:(?:(?:Okay)\\s(.+)(?:, How can I help you))|For verification, what is the email address registered with us)",
      "actionKey": "response",
      "actionValue":"Please call 1-800-Support or send email to customersupport@hlsc.com for further help.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Please call 1-800-Support or send email to customersupport@hlsc.com for further help.",["Thank you!"]);
      },
      "description":"Say 'I would like to talk to an agent' to be get customer care information",
      "dsl": 2,
      "suggestion":["Thank you!"],
      "classifier": "agent"
    },

    //Gb> Okay Somenath, how can I help you?
    //You> I forgot my user id

    {
      "regexp":"(?:Received):\\s(?:(?:(?:I\\s)?(?:would like to\\s)?)?(?:forgot|lost|recover)\\s(?:my\\s)?(?:user id|user name))\\s(?:Entry):\\s(?:Okay)((\\s.+)?)(?:, how can I help you)",
      "actionKey": "response",
      "actionValue":"As I understood, you want help recovering your user id, right?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"As I understood, you want help recovering your user id, right?",["Right", "Nope"]);
      },
      "description":"Say 'I forgot my user id' to recover your user id.",
      "dsl": 2,
      "suggestion":["Right", "Nope"],
      "classifier": "forgot_user_id"
    },

    //Gb> As I understood, you want help recovering your user id, right?
    //You> Right.

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yah|Yeh|right|that is correct|You are right)\\s(?:Entry):\\s(?:As I understood, you want help recovering your user id, right)",
      "actionKey": "response",
      "actionValue":"For verification, what is the email address registered with us?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,"",[]);
      },
      "description":"Say 'My email is' to get your identity verified",
      "dsl": 2,
      "suggestion":["My email address", "I do not have access to that email ", "I do not remember the email address "],
      "classifier": "positive_redirect"
    },



    //Okay, as I understand that you want to reset your password , right?
    //Right

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Okay, as I understand that you want to reset your password, right)",
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
      "classifier": "positive_redirect"
    },
    // done up to this, ^
    //                  |
    //Okay, as I understand that you want to reset your password , right?
    //Nope

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
      "classifier": "negetive_redirect"
    },

    //Okay, I can help with that. Before that, for verification purpose, can you please provide your user id?
    //my user id is somenath.ghosh

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
      "classifier": "ask_user_id"
    },

    //Just for confirmation, your user id is somenath.ghosh
    //yep

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yah|Yeh|right|that is correct|you are right)\\s(?:Entry):\\s(?:Just for confirmation, your user id is)(.+)\\s(?:,right)",
      "actionKey": "response",
      "actionValue":"I have verified your id. You will recieve the temporary password in your registered email address. For verification, what is your email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        let u=findUser(matches[1]);
        console.log(u);
        if(u){
          cb(false, '',[]) //overrider for already passed actionValue and suggestion
        }
        else{
          cb(true,'I can not find your user id. Do you want to recover your user id?',["Yes","No"])
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not have my email address registered."],
      "classifier": "positive_redirect"
    },

    //I have verified your id. You will recieve the temporary password in your registered email address. For verification, what is your email address?
    //somenath.ghosh@tcs.com

    {
      "regexp":"(?:Received):\\s(?:My email address is|my email id is |the email is|the email address is)?(.+)\\s(?:Entry):\\s(?:I have verified your id. You will recieve the temporary password in your registered email address. For verification, what is your email address)",
      "actionKey": "response",
      "actionValue":"Just for confirmation, your email address is $1.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        let u=validateEmail(matches[1]);
        console.log(u);
        if(u){
          cb(false, '',[]) //overrider for already passed actionValue and suggestion
        }
        else{
          cb(true,'I can not find this email address. You need to register your email address to get your temporary password. As of now, do you want to try answering security questions?',["Sure","Nope, I do not remember them."])
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes ", "Nope"],
      "classifier": "positive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:My email address is|my email is |the email is|the email address is)?(.+)\\s(?:Entry):\\s(?:I have verified your id. You will recieve the temporary password in your registered email address. For verification, what is your email address)",
      "actionKey": "response",
      "actionValue":"I have verified your email address. You will recieve your temporary password in your registered email address.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        let u=validateEmail(matches[1]);
        console.log(u);
        if(u){
          cb(false, '',[]) //overrider for already passed actionValue and suggestion
        }
        else{
          cb(true,'I can not find this email address. You need to register your email address to get your temporary password. As of now, do you want to try answering security questions?',["Sure","Nope, I do not remember them."])
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Thanks for your help! ", "I do not have access to that email."],
      "classifier": "positive_redirect"
    },

    //I have verified your email address. You will recieve your temporary password in your registered email address.
    //Thanks for your help!

    {
      "regexp":"(?:Received):\\s(?:Thanks for your help|Thanks|Thx|Thank you|awesome|wonderful)\\s(?:Entry):\\s(.+)",
      "actionKey": "response",
      "actionValue":"You are welcome! You can close the chat window now.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my userid "]);
      },
      "description":"Say 'Thanks' to end conversation",
      "dsl": 2,
      "suggestion":['bye'],
      "classifier": "convey_thanks"
    },

    //You are welcome! You can close the chat window now.
    //bye

    {
      "regexp":"(?:Received):\\s(?:bye|bye bye|byebye|talk to your later|ttyl|see you)\\s(?:Entry):\\s(?:You are welcome! You can close the chat window now)",
      "actionKey": "response",
      "actionValue":"bye.",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my userid "]);
      },
      "description":"Say 'bye' to end conversation",
      "dsl": 2,
      "suggestion":[],
      "classifier": "end_conversation"
    },

    //bye!
    //-----do not expect anything, need to handle it properly

    {
      "regexp":"(?:Received):\\s(?:bye|bye bye|byebye|talk to your later|ttyl|see you)\\s(?:Entry):\\s(?:You are welcome! You can close the chat window now)",
      "actionKey": "response",
      "actionValue":"bye!",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my userid "]);
      },
      "description":"Say 'bye' to end conversation",
      "dsl": 2,
      "suggestion":[],
      "classifier": "end_conversation"
    },



    //I can not find your user id. Do you want to recover your user id?
    //yes

    {
      "regexp":"(?:Received):\\s(?:Yes|Yes please|yeah|Yep|Yeah please)\\s(?:Entry):\\s(?:I can not find your user id. Do you want to recover your user id)",
      "actionKey": "response",
      "actionValue":"Sure, I can help with recovering user id. Before that, for verification purpose, can you please provide your registered email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Sure, I can help with that. Before that, for verification purpose, can you please provide your registered email address?",["My email address is ","I do not remember the email address. "]);
      },
      "description":"Say 'I want help on recovering my user id' to recover your user id.",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "positive_redirect"
    },

    //Sure, I can help with recovering user id. Before that, for verification purpose, can you please provide your registered email address?
    //somenath.ghosh@tcs

    {
      "regexp":"(?:Received):\\s(?:My email address is|my email is |the email is|the email address is)?(.+)\\s(?:Entry):\\s(?:Sure, I can help with recovering user id. Before that, for verification purpose, can you please provide your registered email address)",
      "actionKey": "response",
      "actionValue":"Just for confirmation, your email address is $1",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        let u=validateEmail(matches[1]);
        console.log(u);
        if(u){
          cb(false, '',[]) //overrider for already passed actionValue and suggestion
        }
        else{
          cb(true,'I can not find this email address. You need to register your email address to get your user id.',["Sure","Nope, I do not remember them."])
        }
      },
      "description":"Say 'I want help on recovering my user id' to recover your user id.",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "positive_redirect"
    },



    {
      "regexp":"(?:Received):\\s(?:bye|byebye|talk to you later|ttyl|see you soon)\\s(?:Entry):\\s(?:.+)",
      "actionKey": "response",
      "actionValue":"Bye!",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(false,"bye!",["My user id is ","I forgot my userid "]);
      },
      "description":"Say 'bye' to end conversation.",
      "dsl": 2,
      "suggestion":[],
      "classifier": "password_reset"
    }

//olds



  ];

})();

module.exports = DP;
