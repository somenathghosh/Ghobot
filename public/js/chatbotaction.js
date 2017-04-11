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
sampleConversation = sampleConversation_passoword_reset_negetive_test_invalid_email;


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
