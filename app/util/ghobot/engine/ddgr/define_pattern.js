//Add your patterns here
//how to add --
/*

Add it anywhere, it should go in way of active conversation!

*/

//


module.exports = [

  {
    "regexp":"^(?:(?:hi)|(?:(?:hello))|(?:(?:howdy))|(?:(?:howdy my friend))|(?:(?:howdy friend))|(?:(?:hey|hey friend|hey buddy)))",
    "actionKey": "response",
    "actionValue":"howdy, friend, how are you doing?",
    "callback":undefined,
    "description":"Say 'Good morning' to be greeted back.",
    "context": 0,
    "suggestion":"I am fine"
  },

  {
    "regexp":"^(?:(?:I am fine)|(?:(?:fine))|(?:(?:am fine))|(?:(?:I am just doing fine))|(?:(?:doing ok))|(?:(?:okay)))",
    "actionKey": "response",
    "actionValue":"Okay, what can I help you with? I do answer all of your query, just ask what you are looking for",
    "callback":undefined,
    "description":"Say 'I am fine' to be greeted back.",
    "context": 0,
    "suggestion":"I would like to reset my password"

  },

  {
    "regexp":"(?:(?:I would like to reset my password)|(?:(?:reset password))|(?:(?:forgot password)))",
    "actionKey": "response",
    "actionValue":"Okay, I can help you with that.Before that, for verification, what is your user id?",
    "callback":undefined,
    "description":"Say 'I am fine' to be greeted back.",
    "context": 0,
    "suggestion":"Sure, my user id is"

  },

  {
    "regexp":"^(?:Sure, my user id is|userid|userid is) (.*)",
    "actionKey": "response",
    "actionValue":"$1, let me verify your identify",
    "callback":function(matches) {return findUser(matches[1]);},
    "description":"Provide your user id",
    "context": 0,
    "suggestion":null

  },
  {
    "regexp":"^(?:my name is|I'm|I am) (.*)",
    "actionKey": "response",
    "actionValue":"hi $1, thanks for talking to me today",
    "callback":function(matches) {return (matches[1] + ' >');},
    "description":"Say 'My name is [your name]' or 'I am [name]' to be called that by the bot",
    "context": 0,
    "suggestion":null

  },
  {
    "regexp":"^(?:(?:bye)|(?:(?:bye bye))|(?:(?:byebye))|(?:(?:see you))|(?:(?:talk to you later))|(?:(?:ttly)))",
    "actionKey": "response",
    "actionValue":"Thank you. It was very nice talking to you.",
    "callback":undefined,
    "description":"Say 'Bye' to end the conversation.",
    "context": 0,
    "suggestion":null
  }

];


//context
// 0 ~ intro
// 1 ~ password
// 2 ~ user id
// 3 ~ new topic
