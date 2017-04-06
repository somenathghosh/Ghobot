'use strict';

var sampleConversation = [
    "This is Somenath Ghosh",
    "I forgot my password",
    "My user id is somenath.ghosh",
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
ChatBot.setBotName("Ghobot >");
