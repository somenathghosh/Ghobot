/* HTML5 magic
- GeoLocation
- WebSpeech
*/

'use strict';
//This var is referred inside chatbot.js for play. Utilize this for testing.
var sampleConversation;

var sampleConversation_passoword_reset_positive_test = [
    //Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenath Ghosh",
    //Just for confirmation, am I speaking with Somenath ?
    "Yes",
    //Okay Somenath, how can I help you?
    "forgot my password",
    //Okay, as I understand that you want to reset your password, right?
    "right",
    //Okay, I can help with that. Before that, for verification purpose, can you please provide your user id
    "My user id is somenath.ghosh",
    //Just for confirmation, your user id is somenath.ghosh@tcs.com ,right?
    "correct",
    //To recieve the temporary password in your registered email address, can you please provide your email address?
    "somenath.ghosh@tcs.com",
    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    //You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye"
];


var sampleConversation_passoword_reset_negetive_test = [
    //Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenaht",
    //Just for confirmation, am I speaking with Somenaht ?
    "Nope",
    //Okay, please state your name?
    "Somenath",
    //Just for confirmation, am I speaking with Somenaht ?
    "Yep",
    //Okay Somenath, how can I help you?
    "I lost my password",
    //Okay, as I understand that you want to reset your password, right?
    "correct",
    //Okay, I can help with that. Before that, for verification purpose, can you please provide your user id
    "somenath.banerjee",
    //Just for confirmation, your user id is somenath.banerjee ,right?
    "nope",
    //what is your user id?
    "my user name is somenath.ghosh",
    //Just for confirmation, your user id is somenath.ghosh ,right?
    "right",
    //To recieve the temporary password in your registered email address, can you please provide your email address?
    "somenath.ghosh@tcs.com.xxx",
    //Just for confirmation, you said somenath.ghosh@tcs.com.xxx, correct?
    "No",
    //what is the correct email address?
    "somenath.ghosh@tcs.com",
    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    //You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye"
];


var sampleConversation_passoword_reset_negetive_test_invalid_email = [
    //Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenaht",
    //Just for confirmation, am I speaking with Somenaht ?
    "Nope",
    //Okay, please state your name?
    "Somenath",
    //Just for confirmation, am I speaking with Somenaht ?
    "Yep",
    //Okay Somenath, how can I help you?
    "I lost my password",
    //Okay, as I understand that you want to reset your password, right?
    "correct",
    //Okay, I can help with that. Before that, for verification purpose, can you please provide your user id
    "somenath.banerjee",
    //Just for confirmation, your user id is somenath.banerjee ,right?
    "nope",
    //what is your user id?
    "my user name is somenath.ghosh",
    //Just for confirmation, your user id is somenath.ghosh ,right?
    "right",
    //To recieve the temporary password in your registered email address, can you please provide your email address?
    "somenath.ghosh@.com.xxx",
    //Just for confirmation, you said somenath.ghosh@tcs.com.xxx, correct?
    "Sure",
    //what is the correct email address?
    "somenath.ghosh@tcs.com",
    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    //You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye"
];




var sampleConversation_user_id_recover_negetive_test_invalid_email = [
    //Welcome to HealthLogic Virtual Assistant services. My name is Ghobot. Whom am I speaking with today?
    "who are you?" ,
    //I can help you with that in a min. Before that, please say your name.
    "can you tell me who you are?",
    //I can help you with that in a min. Before that, please say your name.
    "nope, before that tell me who you are",
    //I can help you with that in a min. Before that, please say your name.
    "where is USA",
    //I can help you with that in a min. Before that, please say your name.
    "I won't tell",
    //Okay, as I understand that you want to reset your password, right?
    "I am Brandon",
    //Just for confirmation, am I speaking with Brandon ?
    "That is correct.",
    //Okay Brandon, how can I help you?
    "I need to find my id",
    //As I understood, you want help recovering your user id, is this correct?
    "Correct",
    //I will send your user ID to the email address I have on file. For verification, what is your email address?
    "email is brandon.g.rodenmayer@.com",
    //This is not a valid email address. Do you want to try again?
    "Sure",
    //what is the correct email address?
    "somenath.ghosh@tcs.com",
    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    //I have successfully recovered your user id. You will recieve it at the provided email address. Thanks for choosing HealthLogic virtual assistant!
    "Thanks!",
    //You are welcome. Is there anything else I can help you with? If you are finished, you may close that chat window now.
    "would like to talk to an agent",
    //Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.
    "Thanks!"
];


var sampleConversation_recover_user_id_positive_test = [
    //Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenath Ghosh",
    //Just for confirmation, am I speaking with Somenath ?
    "Yes",
    //Okay Somenath, how can I help you?
    "forgot my user id",
    //Okay, as I understand that you want to recover your user id, right?
    "right",
    "somenath.ghosh@tcs.com",
    //Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    //You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye"
];



//Test container
sampleConversation = sampleConversation_user_id_recover_negetive_test_invalid_email;


var config = {
    botName: 'Ghobot',
    inputs: '#humanInput',
    inputCapabilityListing: true,
    engines: ChatBot.Engines.ghobot(),
    addChatEntryCallback: function(entryDiv, text, suggestion, origin) {
        entryDiv.delay(200).slideDown();
    }
};
ChatBot.init(config);
ChatBot.setBotName("Ghobot");

//********************************************************************************************************************
//Trying to use HTML5's Speech to Text feature. The below code is not working. Need to debug.
//For fix, Ref: https://github.com/GoogleChrome/webplatform-samples/blob/master/webspeechdemo/webspeechdemo.html
//********************************************************************************************************************

(function(){

  var final_transcript = '';
  var recognizing = false;
  var last10messages = []; //to be populated later

  if (!('webkitSpeechRecognition' in window)) {
    console.log("webkitSpeechRecognition is not available");
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
      recognizing = true;
    };

    recognition.onresult = function(event) {
      var interim_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
          $('#humanInput').addClass("final");
          $('#humanInput').removeClass("interim");
        } else {
          interim_transcript += event.results[i][0].transcript;
          $("#humanInput").val(interim_transcript);
          $('#humanInput').addClass("interim");
          $('#humanInput').removeClass("final");
        }
      }
      $("#humanInput").val(final_transcript);
      };
    }

  })();
