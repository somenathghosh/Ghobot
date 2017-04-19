/* eslint-disable quotes, comma-dangle */
'use strict';
const Promise = require('bluebird');

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

/**
 * [This is the core Pattern recognition module. This fuels DDGR engine coupled with NLP Classifier.]
 * @method
 * @return  {[Array]}   [description]
 * This is a function
 * @author Somenath Ghosh
 * @version [0.1.1]
 * @date    2017-04-15
 */
let DP = (function() {
  //  Define Private methods and members
  let findUser = (user) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if(user.toLowerCase().trim() === 'somenath.ghosh') {
          resolve(true);
        } else if (user.toLowerCase().trim() === 'brandon.g.rodenmayer') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 2000);
    });
  };

  //  let resetPassword = (user) => {
  //    if(findUser(user)) return 'AAAA';
  //    else return 'No Password';
  //  }

  let findEmail = (email) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if(email.toLowerCase().trim() === 'somenath.ghosh@tcs.com') {
          resolve(true);
        } else if (email.toLowerCase().trim() === 'brandon.g.rodenmayer@tcs.com') {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 2000);
    });
  };

  //  let humanName = () => {
  //
  //  }

  let validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase().trim());
  };

  let pickY = () => {
    return new Array('Yes','That is Correct','Correct').pick();
  };

  let pickN = () => {
    return new Array('No','Incorrect','That is incorrect').pick();
  };

  let pickForgotPassword = () => {
    return new Array('I forgot my password','I lost my password','I would like to reset my password').pick();
  };

  let pickForgotUserid = () => {
    return new Array('I forgot my user id','I forgot my user name','I would like to recover my user id').pick();
  };


  return [

    //  Gb> Welcome to HL bot services. My name is Ghobot. Who am I speaking with today? | Okay, please state your name.
    //  You> Somenath

    {
      "regexp": "(?:Received):\\s(((?:.+?\\s)?(?:help)(?:\\s.+?)?))\\s(?:Entry):\\s(?:.+?)",
      "actionKey": "response",
      "actionValue": "How can I help you?",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches[1]);
        let r = /(?:(?:.+\s)??(?:reset|forgot|lost|recover|resetting|recovering)\s(?:my\s)?(?:password|passcode)(?:.+?)?)/i;
        let r1 = /(?:(?:.+\s)??(?:reset|forgot|lost|recover|resetting|recovering)\s(?:my\s)?(?:userid|username|user id|user name)(?:.+?)?)/i;
        console.log(r.test(matches[1].trim()));
        if((matches[1] !== undefined || matches[1] !== null || '' !== matches[1].trim()) && r.test(matches[1].trim())) {
          cb(true, "Okay, as I understand that you want to reset your password, is this correct?", ["That is correct ", "No "]);
          return;
        }
        if((matches[1] !== undefined || matches[1] !== null || '' !== matches[1].trim()) && r1.test(matches[1].trim())) {
          cb(true, "As I understood, you want help recovering your user id, is this correct?", ["That is correct ", "No "]);
          return;
        }
        cb(true, "how can I help you?", ['I forgot my password. ', 'I forgot my user id. ', 'I want to talk to an agent. ']);
        return;
      },
      "description": "Say 'help' to be get list of help menu.",
      "dsl": 2,
      "suggestion": ['I forgot my password. ', 'I forgot my user id. ', 'I want to talk to an agent. '],
      "classifier": "ask_help"
    },

    {
      "regexp": "(?:Received):\\s((?:(?:(?:I\\s)?(?:would like to (?:talk|speak) to|(?:want|need) to (?:talk|speak) to)?(?:\\s)?(?:an\\s)?)?(?:agent|customer care|representative))|(?:(?:please\\s)?connect me to (?:an\\s)?(?:agent|customer care|representative))|((?:(?:(?:I\\s)?do not remember|I do not have access to) the email)(?:\\saddress|id)?))\\s(?:Entry):\\s(?:For verification, what is the email address registered with us|I can not find your email address. We need your registered email address to recover your user id|I can not find your email address. We need your registered email address to reset your password|I am sorry, I could not understand you, Is there anything, I can help you with|(?:.+?)?)",
      "actionKey": "response",
      "actionValue": "Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.",
      "callback":
      function(matches, cb) {
        'use strict';
        console.log(matches[1]);
        let r = /(?:[^.\w]|^|^\W+)+(email)+(?:[^.\w]|\W(?=\W+|$)|$)/gi;
        if((matches[1] !== undefined || matches[1] !== null || '' !== matches[1].trim()) && r.test(matches[1].trim())) {
          cb(true, "Without the email address verification, I would not be able to help you further. Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.", ["Bye", "Thank you!"]);
          return;
        }
        cb(true, "Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.", ["Bye", "Thank you!"]);
      },
      "description": "Say 'I would like to talk to an agent' to be get customer care information",
      "dsl": 2,
      "suggestion": ["Thank you!"],
      "classifier": "agent"
    },

    {
      "regexp": "(?:Received):\\s(?:(.+?\\s)?(nuts|fuck|fucking|fcuk|asshole|idiot|fcuking)(?:(\\s.+?)?))\\s(?:Entry):\\s(.+?)",
      "actionKey": "response",
      "actionValue": "I am bot for your services. I understand what you are saying. All conversaions are tracked and monitoring. Thank you.",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        cb(false, '', []);
        //  cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description": "Say 'No Abusive words' ",
      "dsl": 2,
      "suggestion": ['bye', 'I would like to talk to an agent '],
      "classifier": "convey_thanks"
    },

    {
      "regexp": "(?:Received):\\s((?:(?:hi|hello|hey|howdy)?\\s(?:bot|ghobot)?,\\s)?(?:my name is|I am|I'm|This is|This side|here is|myself)?(?:\\s?)(.+?)(?:\\s(?:.+?))?)\\s(?:Entry):\\s(?:(?:Welcome to HealthLogic Virtual Assistant services. My name is Ghobot.\\s)?Who am I speaking with today|(?:(?:Okay,\\s)?(?:please state your name))|I am fine, Thanks. Please state your name|Sorry, I need your name before I can proceed. What is your name|Hello, please state your name|(?:(?:.+?) is not a valid name. Please state your name))",
      "actionKey": "response",
      "actionValue": "",
      "callback":
      function(matches, cb) {
        'use strict';
        console.log(matches);
        try{
          let r = /(?:[^.\w]|^|^\W+)+(who|what|where|how|when|which|whose|why|you|yours|hi|hello|hey|howdy|how)+(?:[^.\w]|\W(?=\W+|$)|$)/gi;
          let r1 = /(.+?)?(how are you|how do you do|how is everything at your end|how is it going)(,)?(\s)?(.+)?/gi;
          let r2 = /(?:[^.\w]|^|^\W+)+(hi|hello|howdy|hey)+(?:[^.\w]|\W(?=\W+|$)|$)/gi;
          let q = matches[1]
          //  console.log(q);
          let m = r.test(q);
          if(m) {
            if((matches[1] !== undefined || matches[1] !== null || '' !== matches[1].trim()) && r1.test(q)) {
              cb(true, 'I am fine, Thanks. Please state your name.', ['My name is ']);
              return;
            }
            if((matches[1] !== undefined || matches[1] !== null || '' !== matches[1].trim()) && r2.test(q)) {
              console.log(q);
              cb(true, 'Hello, please state your name.', ['My name is ']);
              return;
            }
            cb(true, 'Sorry, I need your name before I can proceed. What is your name?', ['My name is ']);
            return;
          } else{
            let r = /(?:[^.\w]|^|^\W+)+(I|my|\[your|he|his|she|her|his|we|us|it|all|any|anyone|none|some|someone|myself|himself|herself|themselves|its|bye|thanks|No|yes|nope|yep|correct|Yeah|Yah)+(?:[^.\w]|\W(?=\W+|$)|$)/gi
            //  let r = /(.+?)?(I|he|his|she|her|his|we|us|it|all|any|anyone|none|some |someone|myself|himself|herself|themselves|its)(.+)?/gi;
            if((matches[1] !== undefined || matches[1] !== null || '' !== matches[1].trim()) && r.test(matches[2].trim())) {
              cb(true, 'That is not a valid name. Please state your name.', ['My name is ']);
              return;
            }
            cb(true, "Just for confirmation, am I speaking with "+matches[2]+" ?", [pickY(), pickN()]);
            return;
          }
        } catch(e) {
          console.error(e);
        }
      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": [],
      "classifier": "ask_name"
    },

    {
      "regexp": "(?:Received):\\s(((?:who are you|what do you do)(?:\\s.+?)?))\\s(?:Entry):\\s(?:.+?)",
      "actionKey": "response",
      "actionValue": "How can I help you?",
      "callback":
      function(matches, cb) {
        'use strict';
        console.log(matches[1]);
        cb(true, "I am HealthLogic Virtual Assistant made with awesomeness of NLP on node.js. I do help on resetting password, recovering user id. how can I help you?",['I forgot my password. ', 'I forgot my user id. ', 'I want to talk to an agent. ' ]);
        return;
      },
      "description": "Say 'help' to be get list of help menu.",
      "dsl": 2,
      "suggestion": ['I forgot my password. ', 'I forgot my user id. ', 'I want to talk to an agent. '],
      "classifier": "ask_help"
    },

    //  Gb> Just for confirmation, am I speaking with Somenath?
    //  You> Yep

    {
      "regexp": "(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is|this is|you are|exactly)?(?:\\s)?(?:right|correct))|(?:.+?)?exactly(?:.+?)?)\\s(?:Entry):\\s(?:Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue": "Okay $1, how can I help you?",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        let name = matches[1];
        if((name === undefined || name === null || '' === name.trim())) {
          name = '';
        }
        cb(true, "Okay "+name+", how can I help you?", [pickForgotPassword(), pickForgotUserid(), "I would like to talk to an agent"]);
      },
      "description": " ",
      "dsl": 2,
      "suggestion": ["I forgot my password","I forgot my user id","I would like to talk to an agent"],
      "classifier": "positive_redirect"
    },


    {
      "regexp": "(?:Received):\\s(?:Thanks for your help|Thanks|Thx|Thank you|okay, thanks|awesome|wonderful)(:?.+?)?\\s(?:Entry):\\s(.+?)",
      "actionKey": "response",
      "actionValue": "You are welcome. Is there anything else I can help you with? If you are finished, you may close that chat window now.",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        cb(false, '', []);
        //  cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description": "Say 'bye' to end conversation",
      "dsl": 2,
      "suggestion": ['bye', pickForgotPassword(), pickForgotUserid(), 'I would like to talk to an agent '],
      "classifier": "convey_thanks"
    },

    //  You are welcome! You can close the chat window now.
    //  bye

    {
      "regexp":"(?:Received):\\s(?:bye|bye bye|byebye|talk to your later|ttyl|see you)(?:.+?)?\\s(?:Entry):\\s(?:(.+?))",
      "actionKey": "response",
      "actionValue":"bye. Thanks for talking to me today!",
      "callback":
      function(matches,cb) {
        'use strict';
        //  console.log(matches);
        cb(false, '',[]);
        //  cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'bye' to end conversation",
      "dsl": 2,
      "suggestion":[],
      "classifier": "end_conversation"
    },


    //  Just for confirmation, am I speaking with Somenath?
    //  Nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s|you are\\s|this is\\s)?(?:not correct|not right|incorrect))|((?:.+?\\s)?(not)(?:.+?)?))\\s(?:Entry):\\s(?:Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        //  console.log(matches);
        cb(true,"Okay, please state your name?",["My name is "]);
      },
      "description":" ",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "negetive_redirect"
    },

    //  Okay Somenath, how can I help you? | Okay, how can I help you?
    //  I would like to reset my password

    {
      "regexp": "(?:Received):\\s(?:(?:(?:(?:I\\s)?(?:(?:would like to|want to|need my password)\\s)?)?(?:reset|forgot|lost|recover)\\s(?:my\\s)?(?:password|passcode))|(?:I need(?: my)? password(?:\\s(?:to be))? (?:reset|recovery|recovered)?)|(?:I need to (?:find|get|recover)(?: my)? password))\\s(?:Entry):\\s(?:(?:(?:Okay)((\\s.+)?)(?:, how can I help you))|You are welcome\. Is there anything else I can help you with\\? If you are finished, you may close that chat window now|I am sorry, I could not understand you, Is there anything, I can help you with|(?:(.+\\s?)?how can I help you))",
      "actionKey": "response",
      "actionValue":"Okay, as I understand that you want to reset your password, is this correct?",
      "callback":
      function(matches,cb) {
        'use strict';
        //  console.log(matches);
        cb(true,"Okay, as I understand that you want to reset your password, is this correct?", ["That is correct. ", "No. "]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Right ", "Nope "],
      "classifier": "password_reset"
    },

    //  Gb> Okay Somenath, how can I help you? | For verification, what is the email address registered with us?
    //  You> I would like to talk to an agent

    {
      "regexp": "(?:Received):\\s((?:(?:(?:I\\s)?(?:would like to (?:talk|speak) to|want to (?:talk|speak) to)?(?:\\s)?(?:an\\s)?)?(?:agent|customer care|representative))|(?:(?:please\\s)?connect me to (?:an\\s)?(?:agent|customer care|representative))|((?:(?:(?:I\\s)?do not remember|I do not have access to) the email)(?:\\saddress|id)?))\\s(?:Entry):\\s(?:(?:(?:Okay)(?:\\s(.+?))?(?:, How can I help you))|I am sorry, I would not able to help you here without a valid registered email address. As I understood that you have trouble in accessing the email address, you may prefer to contact an agent or customer care|You are welcome\. Is there anything else I can help you with\\? If you are finished, you may close that chat window now|I am sorry, I couldn't understand you! Is there anything, I can help you with|(?:(.+\s?)?how can I help you))",
      "actionKey": "response",
      "actionValue": "Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log('Inside of 1-800-Support ');
        //  console.log(matches);
        //  let r = /(?:[^.\w]|^|^\W+)+(email)+(?:[^.\w]|\W(?=\W+|$)|$)/gi;

        cb(true, "Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.", ["Bye", "Thank you!"]);
      },
      "description": "Say 'I would like to talk to an agent' to be get customer care information",
      "dsl": 2,
      "suggestion": ["Thank you!"],
      "classifier": "agent"
    },


    //  Gb> Okay Somenath, how can I help you?
    //  You> I forgot my user id

    {
      "regexp": "(?:Received):\\s(?:(?:(?:I\\s)?(?:(?:would like to|need to)\\s)?)?(?:forgot|lost|recover|find)\\s(?:my\\s)?(?:(?:(?:user\\s)?id|userid)|(?:user name|username)))\\s(?:Entry):\\s(?:(?:(?:Okay)((\\s.+)?)(?:, how can I help you))|You are welcome\. Is there anything else I can help you with\\? If you are finished, you may close that chat window now|I am sorry, I could not understand you, Is there anything, I can help you with|how can I help you)",
      "actionKey": "response",
      "actionValue": "As I understood, you want help recovering your user id, is this correct?",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        cb(true, "As I understood, you want help recovering your user id, is this correct?", ["That is correct. ", "No. "]);
      },
      "description": "Say 'I forgot my user id' to recover your user id.",
      "dsl": 2,
      "suggestion": ["Right", "Nope"],
      "classifier": "forgot_user_id"
    },

    //  Gb> As I understood, you want help recovering your user id, is this correct?
    //  You> Right.

    {
      "regexp": "(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yah|Yeh|right|that is correct|You are right|correct)\\s(?:Entry):\\s(?:As I understood, you want help recovering your user id, is this correct)",
      "actionKey": "response",
      "actionValue": "I will send your user ID to the email address I have on file. For verification, what is your email address?",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        cb(false, "", []);
      },
      "description": "Say 'My email address is' to get your identity verified",
      "dsl": 2,
      "suggestion": ["My email address", "I do not have access to the email ", "I do not remember the email address "],
      "classifier": "positive_redirect"
    },
    //  Okay, as I understand that you want to reset your password , is this correct?
    //  Right

    {
      "regexp": "(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s|this is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))(?:.+?)?\\s(?:Entry):\\s(?:Okay, as I understand that you want to reset your password, is this correct)",
      "actionKey": "response",
      "actionValue": "",
      "callback":
      function(matches, cb) {
        'use strict';
        console.log(matches);
        cb(true, "Okay, I can help with that. Before that, for verification purpose, can you please provide your user id?" ,["My user id is ","I forgot my user id "]);
      },
      "description": "Say 'My user id is [user id]' to provide your user id.",
      "dsl": 2,
      "suggestion": [],
      "classifier": "positive_redirect"
    },

    {
      "regexp": "(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?(?:incorrect|not correct|not right))|(?:(?:you are\\s)?(?:not right|incorrect|not correct)))\\s(?:Entry):\\s(?:Okay, as I understand that you want to reset your password, is this correct)",
      "actionKey": "response",
      "actionValue": "Okay, how can I help you?",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        cb(false, "", []);
      },
      "description": "Say 'No' to disagree.",
      "dsl": 2,
      "suggestion": ["I forgot my password", "I forgot my user id", "I would like to talk to an agent"],
      "classifier": "negetive_redirect"
    },

    {
      "regexp": "(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?(?:incorrect|not correct|not right))|(?:(?:you are\\s)?(?:not right|not correct|incorrect)))\\s(?:Entry):\\s(?:As I understood, you want help recovering your user id, is this correct)",
      "actionKey": "response",
      "actionValue": "Okay, how can I help you?",
      "callback":
      function(matches, cb) {
        'use strict';
        // console.log(matches);
        cb(false, "", []);
      },
      "description": "Say 'No' to disagree.",
      "dsl": 2,
      "suggestion": ["I forgot my password", "I forgot my user id", "I would like to talk to an agent"],
      "classifier": "negetive_redirect"
    },


    {
      "regexp": "(?:Received):\\s(?:I forgot my user id|I forgot my username|I lost my user id|I lost my username|I need to find my id)\\s(?:Entry):\\s(?:Okay, I can help with that. Before that, for verification purpose, can you please provide your user id|what is your user id)",
      "actionKey": "response",
      "actionValue": "As I understood, you want help recovering your user id, is this correct?",
      "callback":
      function(matches, cb) {
        'use strict';
        // console.log(matches);
        cb(false, "Just for confirmation, your user id is "+matches[1]+" ,is this correct?", ["Yep", "No"]);
      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": ["Right", "Nope"],
      "classifier": "ask_user_id"
    },

    // Okay, I can help with that. Before that, for verification purpose, can you please provide your user id?
    // my user id is somenath.ghosh
    {
      "regexp": "(?:Received):\\s(?:(?:.+?)?(?:(?:user(?:\\s)(?:id|name)?)(?:(?:\\s)?(?:is\\s|=|:)?(?:\\s)?)?))?(?:\\s)?(.+?)\\s(?:Entry):\\s(?:Okay, I can help with that. Before that, for verification purpose, can you please provide your user id|what is your user id)",
      "actionKey": "response",
      "actionValue": "hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches, cb) {
        'use strict';
        // console.log(matches);
        if(matches[1] === undefined || matches[1] === null || '' === matches[1].trim()) {
          cb(true, "I could not find your user id in our file. Would you like me to help you recover your user id?", ["Yes", "No"]);
          return;
        }
        cb(true, "Just for confirmation, your user id is "+matches[1]+" ,is this correct?", ["Yes", "No"]);
        return;
      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": ["Yes", "No"],
      "classifier": "ask_user_id"
    },


    //  Just for confirmation, your user id is somenath.ghosh
    //  yep

    {
      "regexp": "(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:(?:that|this) is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, your user id is)(.+)\\s(?:,is this correct)",
      "actionKey": "response",
      "actionValue": "You will be receiving the temporary password in your registered email address. For verification,can you please provide your email address?",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        findUser(matches[1])
        .then(function(u) {
          if(u) {
             cb(false, '', []);
           } else{
             cb(true, 'I could not find your user id in our file. Would you like me to help you recover your user id?', ["Yes", "No"]);
           }
        })
        .catch(function(e) {
          console.log('coming to catch');
          cb(true, 'I could not find your user id in our file. Would you like me to help you recover your user id?', ["Yes", "No"]);
        });
        //  console.log(u);
        //  if(u) {
        //    cb(false, '', []); //  overrider for already passed actionValue and suggestion
        //  } else{
        //    cb(true, 'I could not find your user id in our file. Would you like me to help you recover your user id?', ["Yes","No"]);
        //  }
      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": ["My email address is ", "I do not have my email address registered."],
      "classifier": "positive_redirect"
    },

    {
      "regexp": "(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:(?:that|this) is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:I could not find your user id in our file. Would you like me to help you recover your user id)",
      "actionKey": "response",
      "actionValue": "As I understood, you want help recovering your user id, is this correct?",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        cb(false, '',[]) // overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes", "No"],
      "classifier": "positive_redirect"
    },

    // Just for confirmation, your user id is somenath.ghosh
    // nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?(?:not correct|incorrect))|(?:(?:you are\\s)?(?:not right|not correct|incorrect)))\\s(?:Entry):\\s(?:((?:Just for confirmation, your user id is)(.+)\\s(?:,is this correct))|I could not find your user id in our file. Would you like me to help you recover your user id)",
      "actionKey": "response",
      "actionValue":"what is your user id?",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        cb(false, '',[]) // overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My user id is ", "I forgot my user id "],
      "classifier": "positive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:(?:I\\s)?(?:do not remember|do not have|do not have access to|forgot|lost|have trouble accessing)(?:\\s)?((?:the|my|that)?(?:\\s)?(?:email)(?:address|id)?(?:\\s)?(?:.+?)?))\\s(?:Entry):\\s(?:I will send your user ID to the email address I have on file. For verification, what is your email address|what is the correct email address|what is your correct email address|You will be receiving the temporary password in your registered email address. For verification,can you please provide your email address|(?:(?:Just for confirmation, you )(?:mentioned|said)(?:\\s)(.+?)(?:, correct)))",
      "actionKey": "response",
      "actionValue":"I am sorry, I would not able to help you here without a valid registered email address. As I understood that you have trouble in accessing the email address, you may prefer to contact an agent or customer care.",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        cb(false, '',[]);
        // cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'Thanks' to end conversation",
      "dsl": 2,
      "suggestion":['I want to talk to an agent'],
      "classifier": "convey_thanks"
    },

    //  You will recieve your user id in your registered email address. Can you please verify your email address?
    //  somenath.ghosh@tcs.com

    {
      "regexp":"(?:Received):\\s(?:(?:.+?)?(?:(?:(?:email|It)(?:\\s)(?:id|address)?)(?:(?:\\s)?(?:is\\s|=|:)?(?:\\s)?)?))?(?:\\s)?((?:.+?)(?:@)?(?:.+?))\\s(?:Entry):\\s(?:I will send your user ID to the email address I have on file. For verification, what is your email address|what is the correct email address)",
      "actionKey": "response",
      "actionValue":"Just for confirmation, you mentioned $1, correct? ",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        let u=validateEmail(matches[1]);
        // console.log(u);
        if(u){
        cb(false, '',[]);
        }
        else{
           cb(true,'This is not a valid email address. Do you want to try again?',["Sure","No, I do not remember the email address"]);
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes ", "Nope"],
      "classifier": "positive_redirect"
    },


    // You will recieve the temporary password in your registered email address. Can you please verify your email address?
    // somenath.ghosh@tcs.com

    {
      "regexp":"(?:Received):\\s(?:(?:.+?)?(?:(?:(?:email|It)(?:\\s)(?:id|address)?)(?:(?:\\s)?(?:is\\s|=|:)?(?:\\s)?)?))?(?:\\s)?((?:.+?)(?:@)?(?:.+?))\\s(?:Entry):\\s(?:You will be receiving the temporary password in your registered email address. For verification,can you please provide your email address|what is your correct email address)",
      "actionKey": "response",
      "actionValue":"Just for confirmation, you said $1, correct? ",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        let u=validateEmail(matches[1]);
        // console.log(u);
        if(u){
        cb(false, '',[]);
        }
        else{
           cb(true,'That is not a valid email address. Do you want to try again?',["Sure","No, I do not remember the email address"]);
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Yes ", "Nope"],
      "classifier": "positive_redirect"
    },

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|Sure|why not)\\s(?:Entry):\\s(?:This is not a valid email address. Do you want to try again)",
      "actionKey": "response",
      "actionValue":"what is your correct email address? ",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        //  let u=validateEmail(matches[1]);
        //  // console.log(u);
        //  if(u){
        cb(false, '',[]);
        //  }
        //  else{
        //     cb(true,'This is not a valid email address. Do you want to try again?',["Sure","No, I do not remember the email address"]);
        //  }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "positive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|Sure|why not)\\s(?:Entry):\\s(?:That is not a valid email address. Do you want to try again)",
      "actionKey": "response",
      "actionValue":"what is the correct email address? ",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        //  let u=validateEmail(matches[1]);
        //  // console.log(u);
        //  if(u){
        cb(false, '',[]);
        //  }
        //  else{
        //     cb(true,'This is not a valid email address. Do you want to try again?',["Sure","No, I do not remember the email address"]);
        //  }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "positive_redirect"
    },

    //  Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    //  Correct

    {
      "regexp": "(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:(?:that|this) is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, you said )(.+?)(?:, correct)",
      "actionKey": "response",
      "actionValue": "I have reset your password and sent the temporary password to your email. You will have 24 hours to set a new password before the temporary password expires. Thanks for choosing the HealthLogic Virtual Assistant.",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        let email = matches[1];
        if(matches[1] === undefined || matches[1] === null || matches[1].trim() === '' ) {
          email = '';
        }
        findEmail(email)
        .then(function(u) {
          if(u) {
            cb(false, '', []); //  overrider for already passed actionValue and suggestion
          } else{
            cb(true, 'I can not find your email address. We need your registered email address to reset your password.', ["Thank you!", "I want to talk to an agent"]);
          }
        })
        .catch(function(e) {
          cb(true, 'I can not find your email address. We need your registered email address to reset your password.', ["Thank you!", "I want to talk to an agent"]);
        });
        //  console.log(u);
      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": ["Thanks!"],
      "classifier": "positive_redirect"
    },

    // Just for confirmation, you mentioned somenath.ghosh@tcs.com, correct?
    // Correct

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:(?:that|this) is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, you mentioned )(.+?)(?:, correct)",
      "actionKey": "response",
      "actionValue": "I have successfully recovered your user id. You will recieve it at the provided email address. Thanks for choosing HealthLogic virtual assistant!",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        let email = matches[1];
        if(matches[1] === undefined || matches[1] === null || matches[1].trim() === '' ) {
          email = '';
        }
        findEmail(email)
        .then(function(u) {
          if(u) {
            cb(false, '',[]); //  overrider for already passed actionValue and suggestion
          } else{
            cb(true, 'I can not find your email address. We need your registered email address to recover your user id.',["Thank you!","I want to talk to an agent"]);
          }
        })
        .catch(function(e) {
          cb(true, 'I can not find your email address. We need your registered email address to recover your user id.',["Thank you!","I want to talk to an agent"]);
        });

        // console.log(u);

      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": ["Thanks!"],
      "classifier": "positive_redirect"
    },

    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    // Nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:(?:that|this) is\\s)?(?:not correct|incorrect))|(?:(?:you are\\s)?(?:not right|not correct|incorrect)))\\s(?:Entry):\\s(?:Just for confirmation, you mentioned )(.+)(?:, correct)",
      "actionKey": "response",
      "actionValue":"what is the correct email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        cb(false, '',[]) // overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "negetive_redirect"
    },


    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    // Nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:(?:that|this) is\\s)?(?:not correct|incorrect))|(?:(?:you are\\s)?(?:not right|not correct|incorrect)))\\s(?:Entry):\\s(?:Just for confirmation, you said )(.+?)(?:, correct)",
      "actionKey": "response",
      "actionValue":"what is your correct email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        // console.log(matches);
        cb(false, '',[]) // overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "negetive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:(?:.+?)?(No|Nope|Ney|Nah|that is all|that's all|that is it|that's it|I am done|I'm done|done)(?:(?:\\s|,|.).+?)?)\\s(?:Entry):\\s(?:You are welcome\. Is there anything else I can help you with\\? If you are finished, you may close that chat window now)",
      "actionKey": "response",
      "actionValue":"Thanks. You may close the chat window now.",
      "callback":
      function(matches, cb) {
        'use strict';
        //  console.log(matches);
        cb(false, '',[]) // overrider for already passed actionValue and suggestion
      },
      "description": "Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion": ["Bye "],
      "classifier": "negetive_redirect"
    }

  ];

})();

module.exports = DP;
