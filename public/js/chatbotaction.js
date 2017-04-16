/* eslint-disable quotes, camelcase, no-var */
'use strict';

/**
 * [sampleConversation Sample Conversation attachment container]
 * @type {Array}
 */
var sampleConversation;
/**
 * [sampleConversation_passoword_reset_positive_test description]
 * @type {Array}
 */
var sampleConversation_passoword_reset_positive_test = [
    // Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "My name is Somenath Ghosh",
    // Just for confirmation, am I speaking with Somenath ?
    "Yes",
    // Okay Somenath, how can I help you?
    "I forgot my password",
    // Okay, as I understand that you want to reset your password, right?
    "That is correct.",
    // Okay, I can help with that. Before that, for verification purpose, can you please provide your user id
    "My user id is somenath.ghosh",
    // Just for confirmation, your user id is somenath.ghosh@tcs.com ,right?
    "That is correct!",
    // To recieve the temporary password in your registered email address, can you please provide your email address?
    "My email address is somenath.ghosh@tcs.com",
    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yes",
    // You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye",
];

/**
 * [sampleConversation_passoword_reset_negetive_test description]
 * @type {Array}
 */

var sampleConversation_passoword_reset_negetive_test = [
    // Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenaht",
    // Just for confirmation, am I speaking with Somenaht ?
    "Nope",
    // Okay, please state your name?
    "Somenath",
    // Just for confirmation, am I speaking with Somenaht ?
    "Yep",
    // Okay Somenath, how can I help you?
    "I lost my password",
    // Okay, as I understand that you want to reset your password, right?
    "correct",
    // Okay, I can help with that. Before that, for verification purpose, can you please provide your user id
    "somenath.banerjee",
    // Just for confirmation, your user id is somenath.banerjee ,right?
    "nope",
    // what is your user id?
    "my user name is somenath.ghosh",
    // Just for confirmation, your user id is somenath.ghosh ,right?
    "right",
    // To recieve the temporary password in your registered email address, can you please provide your email address?
    "somenath.ghosh@tcs.com.xxx",
    // Just for confirmation, you said somenath.ghosh@tcs.com.xxx, correct?
    "No",
    // what is the correct email address?
    "somenath.ghosh@tcs.com",
    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    // You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye",
];

/**
 * [sampleConversation_passoword_reset_negetive_test_invalid_email description]
 * @type {Array}
 */

var sampleConversation_passoword_reset_negetive_test_invalid_email = [
    // Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenaht",
    // Just for confirmation, am I speaking with Somenaht ?
    "Nope",
    // Okay, please state your name?
    "Somenath",
    // Just for confirmation, am I speaking with Somenaht ?
    "Yep",
    // Okay Somenath, how can I help you?
    "I lost my password",
    // Okay, as I understand that you want to reset your password, right?
    "correct",
    // Okay, I can help with that. Before that, for verification purpose, can you please provide your user id
    "somenath.banerjee",
    // Just for confirmation, your user id is somenath.banerjee ,right?
    "nope",
    // what is your user id?
    "my user name is somenath.ghosh",
    // Just for confirmation, your user id is somenath.ghosh ,right?
    "right",
    // To recieve the temporary password in your registered email address, can you please provide your email address?
    "somenath.ghosh@.com.xxx",
    // Just for confirmation, you said somenath.ghosh@tcs.com.xxx, correct?
    "Sure",
    // what is the correct email address?
    "somenath.ghosh@tcs.com",
    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    // You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye",
];

/**
 * [sampleConversation_recover_user_id_positive_test description]
 * @type {Array}
 */

var sampleConversation_recover_user_id_positive_test = [
    // Welcome to HL bot services. My name is Ghobot. Whom am I speaking with today?
    "my name is Somenath Ghosh",
    // Just for confirmation, am I speaking with Somenath ?
    "Yes",
    // Okay Somenath, how can I help you?
    "forgot my user id",
    // Okay, as I understand that you want to recover your user id, right?
    "right",
    "somenath.ghosh@tcs.com",
    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    // You will recieve your temporary password at the provided email address. Thanks for availing bot services!
    "Thanks!",
    "bye",
];

/**
 * [sampleConversation_user_id_recover_negetive_test_invalid_email description]
 * @type {Array}
 */
var sampleConversation_user_id_recover_negetive_test_invalid_email = [
    // Welcome to HealthLogic Virtual Assistant services. My name is Ghobot. Whom am I speaking with today?
    "who are you?",
    // I can help you with that in a min. Before that, please say your name.
    "can you tell me who you are?",
    // I can help you with that in a min. Before that, please say your name.
    "nope, before that tell me who you are",
    // I can help you with that in a min. Before that, please say your name.
    "where is USA",
    // I can help you with that in a min. Before that, please say your name.
    "I won't tell",
    // Okay, as I understand that you want to reset your password, right?
    "I am Brandon",
    // Just for confirmation, am I speaking with Brandon ?
    "That is correct.",
    // Okay Brandon, how can I help you?
    "I need to find my id",
    // As I understood, you want help recovering your user id, is this correct?
    "Correct",
    // I will send your user ID to the email address I have on file. For verification, what is your email address?
    "It is brandon.g.rodenmayer@.com",
    // This is not a valid email address. Do you want to try again?
    "Sure",
    // what is the correct email address?
    "It is brandon.g.rodenmayer@tcs.com",
    // Just for confirmation, you said somenath.ghosh@tcs.com, correct?
    "Yep",
    // I have successfully recovered your user id. You will recieve it at the provided email address. Thanks for choosing HealthLogic virtual assistant!
    "Thanks!",
    // You are welcome. Is there anything else I can help you with? If you are finished, you may close that chat window now.
    "would like to talk to an agent",
    // Please call 1-800-Support or send email to customersupport@hlsc.com for further assistance.
    "Thanks!",
    "Bye",
];


/**
 * [sampleConversation Test container to be attached to Html for Sample Conversation]
 * @type {Array}
 */
sampleConversation = sampleConversation_passoword_reset_positive_test;


/**
 * [executeTasks Async ]
 * @method  executeTasks
 * @return  {[type]}     [description]
 * This is a function
 * @author Somenath Ghosh
 * @version [version]
 * @date    2017-04-15
 */
function async() {
    return {
        series: function() {
            var tasks = Array.prototype.concat.apply([], arguments);
            var task = tasks.shift();
            task(function() {
                if(tasks.length > 0)
                    async().series.apply(this, tasks);
            });
        },
        parallel: function() {
            var tasks = Array.prototype.concat.apply([], arguments);
            tasks.forEach(function(ele, index) {
                ele(function() {

                });
            });
        },
    };
}

/**
 * [asyncTest description]
 * @method  asyncTest
 * @param  {[type]}   [description]
 * This is a function
 * @author Somenath Ghosh
 * @version [version]
 * @date    2017-04-15
 */
function asyncTest() {
    async().series(
        function t1(callback) {
            console.log('Running Test ' + 1);
            ChatBot.playConversation(sampleConversation_passoword_reset_positive_test, 3000, callback);
        },
        function t2(callback) {
            console.log('Running Test ' + 2);
            ChatBot.playConversation(sampleConversation_passoword_reset_negetive_test, 3000, callback);
        },
        function t3(callback) {
            console.log('Running Test ' + 3);
            ChatBot.playConversation(sampleConversation_recover_user_id_positive_test, 3000, callback);
        },
        function t4(callback) {
            console.log('Running Test ' + 4);
            ChatBot.playConversation(sampleConversation_passoword_reset_negetive_test_invalid_email, 3000, callback);
        },
        function t5(callback) {
            console.log('Running Test ' + 5);
            ChatBot.playConversation(sampleConversation_user_id_recover_negetive_test_invalid_email, 3000, callback);
        },
        function end(callback) {
            console.log('Tests End');
        }
    );
}

/**
 * [config for Bot Client Services]
 * @type {Object}
 */

var config = {
    botName: 'Ghobot', // default name, you can set it by using setBotName method later any point of time.
    inputs: '#humanInput', // input field attachment
    inputCapabilityListing: false, // Make it true if you want to attach the capabilities to the input field
    engines: ChatBot.Engines.ghobot(), // Single Client Engines. Can be extended.
    addChatEntryCallback: function(entryDiv, text, suggestion, origin) { // How do you want your chat entry animation done
        entryDiv.delay(200).slideDown();
    },
};
ChatBot.init(config); // initialize bot client.
ChatBot.setBotName("Ghobot"); // Set name to the bot which will be displayed on screen.

// ********************************************************************************************************************
// Trying to use HTML5's Speech to Text feature. The below code is not working. Need to debug.
// For fix, Ref: https:// github.com/GoogleChrome/webplatform-samples/blob/master/webspeechdemo/webspeechdemo.html
// ********************************************************************************************************************

(function() {
  var final_transcript = '';
  var recognizing = false;
  var last10messages = []; // to be populated later

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
