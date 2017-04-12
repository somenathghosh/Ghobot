
'use strict';

Array.prototype.pick = function () {
  return this[Math.floor(Math.random()*this.length)];
};

let DP = (function(){



  let findUser = (user) => {
    //console.log(user);
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

  let findEmail = (email) => {
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


  let validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase().trim());
  }

  let pickY = () => {
    return new Array('Yes','Yep','Yeah','Correct','Right').pick();
  }

  let pickN = () => {
    return new Array('No','Nope').pick();
  }

  let pickForgotPassword = () => {
    return new Array('I forgot my passsword','I lost my password','Forgot Password','I would like to reset my password','I would like to recover my password','Recover password').pick();
  }

  let pickForgotUserid = () => {
    return new Array('I forgot my user id','I forgot my user name','Forgot user id','I would like to recover my user id','Recover user name').pick();
  }


  return [

    //Gb> Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today? | Okay, please state your name.
    //You> Somenath

    {
      "regexp":"(?:Received):\\s(?:(?:(?:(?:I\\s)?(?:would like to (?:talk|speak) to|want to (?:talk|speak) to)?(?:\\s)?(?:an\\s)?)?(?:agent|customer care|representative))|(?:(?:please\\s)?connect me to (?:an\\s)?(?:agent|customer care|representative))|((?:(?:(?:I\\s)?do not remember|I do not have access to) the email)(?:\\saddress|id)?))\\s(?:Entry):\\s(?:For verification, what is the email address registered with us|I can not find your email address. We need your registered email address to recover your use id|I can not find your email address. We need your registered email address to reset your password|(?:.+?)?)",
      "actionKey": "response",
      "actionValue":"Please call 1-800-Support or send email to customersupport@hlsc.com for further help.",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(true,"Please call 1-800-Support or send email to customersupport@hlsc.com for further help.",["Thank you!"]);
      },
      "description":"Say 'I would like to talk to an agent' to be get customer care information",
      "dsl": 2,
      "suggestion":["Thank you!"],
      "classifier": "agent"
    },

    {
      "regexp":"(?:Received):\\s(?:(.+?\\s)?(nuts|fuck|fucking|fcuk|asshole|idiot|fcuking)(?:(\\s.+?)?))\\s(?:Entry):\\s(.+?)",
      "actionKey": "response",
      "actionValue":"I am bot for your services. I understand what you are saying. All conversaions are tracked and monitoring. Thank you.",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'Thanks' to end conversation",
      "dsl": 2,
      "suggestion":['bye','I would like to talk to an agent '],
      "classifier": "convey_thanks"
    },

    {
      "regexp":"(?:Received):\\s(?:(?:hi|hello|hey|howdy)?\\s(?:bot|ghobot)?,\\s)?(?:my name is|I am|I'm|This is|This side|here is)?(?:\\s?)(.+?)(?:\\s(?:.+?))?\\s(?:Entry):\\s(?:(?:Welcome to HL bot services. My name is Ghobot.\\s)?Whom am I speaking with today|(?:(?:Okay,\\s)?(?:please state your name))|I am fine, Thanks. Please state your name|Hello, please state your name)",
      "actionKey": "response",
      "actionValue":"",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        try{
          let r = /(?:[^.\w]|^|^\W+)+(who|what|where|how|when|which|whose|why|\[your|you|yours)+(?:[^.\w]|\W(?=\W+|$)|$)/gi;
          let r1 = /(.+?)?(how are you|how do you do|how is everything at your end|how is it going)(,)?(\s)?(.+)/gi;
          let r2 = /(.+?)?(hey|hi|hello|howdy)(,)?(\s)?(.+)/gi;
          let q = matches[0]
          let m = r.test(q);
          if(m){
            if(r1.test(q)){
              cb(true,'I am fine, Thanks. Please state your name.',['my name is ']);
              return;
            }
            if(r2.test(q)){
              cb(true,'Hello, please state your name.',['my name is ']);
              return;
            }
            cb(true,'Please state your name.',['my name is ']);
            return;
          }
          else{
            cb(true,"Just for confirmation, am I speaking with "+matches[1]+" ?",[pickY(), pickN()]);
            return;
          }
        }
        catch(e){
          console.error(e);
        }

        //logger.info('info', "Running logs ");

      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":[],
      "classifier": "ask_name"
    },

    //Gb> Just for confirmation, am I speaking with Somenath?
    //You> Yep

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is|you are|exactly)?(?:\\s)?(?:right|correct))|(?:.+?)?exactly(?:.+?)?)\\s(?:Entry):\\s(?:Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"Okay $1, how can I help you?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(true,"Okay "+matches[1]+", how can I help you?",[pickForgotPassword(),pickForgotUserid(),"I would like to talk to an agent"]);
      },
      "description":" ",
      "dsl": 2,
      "suggestion":["I forgot my password","I forgot my user id","I would like to talk to an agent"],
      "classifier": "positive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:Thanks for your help|Thanks|Thx|Thank you|okay, thanks|awesome|wonderful)(:?.+?)?\\s(?:Entry):\\s(.+?)",
      "actionKey": "response",
      "actionValue":"You are welcome, you can either close the chat window now or is there anything else you want to help with?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'Thanks' to end conversation",
      "dsl": 2,
      "suggestion":['bye',pickForgotPassword(), pickForgotUserid(),'I would like to talk to an agent '],
      "classifier": "convey_thanks"
    },

    //You are welcome! You can close the chat window now.
    //bye

    {
      "regexp":"(?:Received):\\s(?:bye|bye bye|byebye|talk to your later|ttyl|see you)\\s(?:Entry):\\s(?:(.+?))",
      "actionKey": "response",
      "actionValue":"bye. Thanks for talking to me today!",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'bye' to end conversation",
      "dsl": 2,
      "suggestion":[],
      "classifier": "end_conversation"
    },


    //Just for confirmation, am I speaking with Somenath?
    //Nope


    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s|you are\\s)?(?:not correct|not right))|((?:.+?\\s)?(not)(?:.+?)?))\\s(?:Entry):\\s(?:Just for confirmation, am I speaking with)\\s(.+)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
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
      "regexp":"(?:Received):\\s(?:(?:(?:I\\s)?(?:would like to\\s)?)?(?:reset|forgot|lost|recover)\\s(?:my\\s)?(?:password|passcode))\\s(?:Entry):\\s(?:(?:(?:Okay)((\\s.+)?)(?:, how can I help you))|You are welcome, you can either close the chat window now or is there anything else you want to help with|I am sorry, I could not understand you, Is there anything, I can help you with)",
      "actionKey": "response",
      "actionValue":"Okay, as I understand that you want to reset your password, right?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
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
      "regexp":"(?:Received):\\s(?:(?:(?:(?:I\\s)?(?:would like to (?:talk|speak) to|want to (?:talk|speak) to)?(?:\\s)?(?:an\\s)?)?(?:agent|customer care|representative))|(?:(?:please\\s)?connect me to (?:an\\s)?(?:agent|customer care|representative))|((?:(?:(?:I\\s)?do not remember|I do not have access to) the email)(?:\\saddress|id)?))\\s(?:Entry):\\s(?:(?:(?:Okay)(?:\\s(.+?))?(?:, How can I help you))|I am sorry, I would not able to help you here without a valid registered email address. As I understood that you have trouble in accessing the email address, you may prefer to contact an agent or customer care|You are welcome, you can either close the chat window now or is there anything else you want to help with|I am sorry, I couldn't understand you! Is there anything, I can help you with)",
      "actionKey": "response",
      "actionValue":"Please call 1-800-Support or send email to customersupport@hlsc.com for further help.",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
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
      "regexp":"(?:Received):\\s(?:(?:(?:I\\s)?(?:would like to\\s)?)?(?:forgot|lost|recover)\\s(?:my\\s)?(?:(?:user id|userid)|(?:user name|username)))\\s(?:Entry):\\s(?:(?:(?:Okay)((\\s.+)?)(?:, how can I help you))|You are welcome, you can either close the chat window now or is there anything else you want to help with|I am sorry, I could not understand you, Is there anything, I can help you with)",
      "actionKey": "response",
      "actionValue":"As I understood, you want help recovering your user id, right?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
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
      "actionValue":"You will be receiving your user id at your registered email address. Can you please provide the email address for verification?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false,"",[]);
      },
      "description":"Say 'My email address is' to get your identity verified",
      "dsl": 2,
      "suggestion":["My email address", "I do not have access to the email ", "I do not remember the email address "],
      "classifier": "positive_redirect"
    },



    //Okay, as I understand that you want to reset your password , right?
    //Right

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Okay, as I understand that you want to reset your password, right)",
      "actionKey": "response",
      "actionValue":"",
      "callback":
      function(matches,cb) {
        'use strict';
        console.log(matches);
        cb(true,"Okay, I can help with that. Before that, for verification purpose, can you please provide your user id?" ,["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'My user id is [user id]' to provide your user id.",
      "dsl": 2,
      "suggestion":[],
      "classifier": "positive_redirect"
    },

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?not correct)|(?:(?:you are not\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Okay, as I understand that you want to reset your password, right)",
      "actionKey": "response",
      "actionValue":"Okay, how can I help you?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false,"" ,[]);
      },
      "description":"Say 'No' to disagree.",
      "dsl": 2,
      "suggestion":["I forgot my password","I forgot my user id","I would like to talk to an agent"],
      "classifier": "negetive_redirect"
    },

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?not correct)|(?:(?:you are not\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:As I understood, you want help recovering your user id, right)",
      "actionKey": "response",
      "actionValue":"Okay, how can I help you?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false,"" ,[]);
      },
      "description":"Say 'No' to disagree.",
      "dsl": 2,
      "suggestion":["I forgot my password","I forgot my user id","I would like to talk to an agent"],
      "classifier": "negetive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:I forgot my user id|I forgot my username|I lost my user id|I lost my username)\\s(?:Entry):\\s(?:Okay, I can help with that. Before that, for verification purpose, can you please provide your user id|what is your user id)",
      "actionKey": "response",
      "actionValue":"As I understood, you want help recovering your user id, right?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false,"Just for confirmation, your user id is "+matches[1]+" ,right?",["Yep", "Nope"]);
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Right", "Nope"],
      "classifier": "ask_user_id"
    },

    //Okay, I can help with that. Before that, for verification purpose, can you please provide your user id?
    //my user id is somenath.ghosh
    {
      "regexp":"(?:Received):\\s(?:(?:.+?)?(?:(?:user(?:\\s)(?:id|name)?)(?:(?:\\s)?(?:is\\s|=|:)?(?:\\s)?)?))?(?:\\s)?(.+?)\\s(?:Entry):\\s(?:Okay, I can help with that. Before that, for verification purpose, can you please provide your user id|what is your user id)",
      "actionKey": "response",
      "actionValue":"hi $1, thanks for talking to me today, what can I help you with?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
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
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, your user id is)(.+)\\s(?:,right)",
      "actionKey": "response",
      "actionValue":"You will be receiving the temporary password in your registered email address. For verification,can you please provide your email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        let u=findUser(matches[1]);
        //console.log(u);
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

    //Just for confirmation, your user id is somenath.ghosh
    //nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?not correct)|(?:(?:you are not\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, your user id is)(.+)\\s(?:,right)",
      "actionKey": "response",
      "actionValue":"what is your user id?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]) //overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My user id is ", "I forgot my user id."],
      "classifier": "positive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:(?:I\\s)?(?:do not remember|do not have|do not have access to|forgot|lost|have trouble accessing)(?:\\s)?((?:the|my|that)?(?:\\s)?(?:email)(?:address|id)?(?:\\s)?(?:.+?)?))\\s(?:Entry):\\s(?:You will be receiving your user id at your registered email address. Can you please provide the email address for verification|what is the correct email address|what is your correct email address|You will be receiving the temporary password in your registered email address. For verification,can you please provide your email address|(?:(?:Just for confirmation, you )(?:mentioned|said)(?:\\s)(.+?)(?:, correct)))",
      "actionKey": "response",
      "actionValue":"I am sorry, I would not able to help you here without a valid registered email address. As I understood that you have trouble in accessing the email address, you may prefer to contact an agent or customer care.",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]);
        //cb(true,"What is your user id?",["My user id is ","I forgot my user id "]);
      },
      "description":"Say 'Thanks' to end conversation",
      "dsl": 2,
      "suggestion":['I want to talk to an agent'],
      "classifier": "convey_thanks"
    },

    //You will recieve the temporary password in your registered email address. Can you please verify your email address?
    //somenath.ghosh@tcs.com

    {
      "regexp":"(?:Received):\\s(?:(?:.+?)?(?:(?:email(?:\\s)(?:id|address)?)(?:(?:\\s)?(?:is\\s|=|:)?(?:\\s)?)?))?(?:\\s)?((?:.+?)(?:@)?(?:.+?))\\s(?:Entry):\\s(?:You will be receiving your user id at your registered email address. Can you please provide the email address for verification|what is the correct email address)",
      "actionKey": "response",
      "actionValue":"Just for confirmation, you said $1, correct? ",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        let u=validateEmail(matches[1]);
        //console.log(u);
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




    //You will recieve your user id in your registered email address. Can you please verify your email address?
    //somenath.ghosh@tcs.com

    {
      "regexp":"(?:Received):\\s(?:(?:.+?)?(?:(?:email(?:\\s)(?:id|address)?)(?:(?:\\s)?(?:is\\s|=|:)?(?:\\s)?)?))?(?:\\s)?((?:.+?)(?:@)?(?:.+?))\\s(?:Entry):\\s(?:You will be receiving the temporary password in your registered email address. For verification,can you please provide your email address|what is your correct email address)",
      "actionKey": "response",
      "actionValue":"Just for confirmation, you mentioned $1, correct? ",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        let u=validateEmail(matches[1]);
        //console.log(u);
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
      "actionValue":"what is the correct email address? ",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        // let u=validateEmail(matches[1]);
        // //console.log(u);
        // if(u){
        cb(false, '',[]);
        // }
        // else{
        //    cb(true,'This is not a valid email address. Do you want to try again?',["Sure","No, I do not remember the email address"]);
        // }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "positive_redirect"
    },


    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|Sure|why not)\\s(?:Entry):\\s(?:That is not a valid email address. Do you want to try again)",
      "actionKey": "response",
      "actionValue":"what is your correct email address? ",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        // let u=validateEmail(matches[1]);
        // //console.log(u);
        // if(u){
        cb(false, '',[]);
        // }
        // else{
        //    cb(true,'This is not a valid email address. Do you want to try again?',["Sure","No, I do not remember the email address"]);
        // }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "positive_redirect"
    },




    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    //Correct

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, you said )(.+?)(?:, correct)",
      "actionKey": "response",
      "actionValue":"I have reset your password. You will recieve your temporary password at the provided email address. Thanks for availing bot services!",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        let u=findEmail(matches[1]);
        //console.log(u);
        if(u){
          cb(false, '',[]) //overrider for already passed actionValue and suggestion
        }
        else{
          cb(true,'I can not find your email address. We need your registered email address to reset your password.',["Thank you!","I want to talk to an agent"])
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Thanks for your help!"],
      "classifier": "positive_redirect"
    },

    //Just for confirmation, you mentioned somenath.ghosh@tcs.com, correct?
    //Correct

    {
      "regexp":"(?:Received):\\s(?:Yes|Yeah|Yep|Yea|Yeh|Yah|(?:(?:that is\\s)?correct)|(?:(?:you are\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, you mentioned )(.+?)(?:, correct)",
      "actionKey": "response",
      "actionValue":"I have successfully recovered your user id. You will recieve it at the provided email address. Thanks for availing bot services!",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        let u=findEmail(matches[1]);
        //console.log(u);
        if(u){
          cb(false, '',[]) //overrider for already passed actionValue and suggestion
        }
        else{
          cb(true,'I can not find your email address. We need your registered email address to recover your user id.',["Thank you!","I want to talk to an agent"])
        }
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["Thanks for your help!"],
      "classifier": "positive_redirect"
    },




    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    //Nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:(?:that|this) is\\s)?not correct)|(?:(?:you are not\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, you said )(.+)(?:, correct)",
      "actionKey": "response",
      "actionValue":"what is the correct email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]) //overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "negetive_redirect"
    },


    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    //Nope

    {
      "regexp":"(?:Received):\\s(?:No|Nope|Ney|(?:(?:that is\\s)?not correct)|(?:(?:you are not\\s)?(?:right|correct)))\\s(?:Entry):\\s(?:Just for confirmation, you mentioned )(.+?)(?:, correct)",
      "actionKey": "response",
      "actionValue":"what is your correct email address?",
      "callback":
      function(matches,cb) {
        'use strict';
        //console.log(matches);
        cb(false, '',[]) //overrider for already passed actionValue and suggestion
      },
      "description":"Say 'My name is [your name]' or 'I am [name] or This is [name]' to be called that by the bot",
      "dsl": 2,
      "suggestion":["My email address is ", "I do not remember the email address."],
      "classifier": "negetive_redirect"
    }




    // done up to this, ^
    //                  |



  ];

})();

module.exports = DP;
