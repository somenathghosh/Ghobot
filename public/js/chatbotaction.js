'use strict';

var sampleConversation = [
    "This is Somenath Ghosh",
    "Yes",
    "I forgot my password",
    "Yep",
    "My user id is somenath.ghosh",
    "Yeh",
    "somenath.ghosh@tcs.com",
    "Yep",
    "Thanks!",
    "where is India",
    "who is Steve Jobs?",
    "do you like Iphone?",
    "bye"
];
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
