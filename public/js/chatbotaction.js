var sampleConversation = [
    "My name is Somenath",
    "I would like to reset my password.",
    "My user id is SOMENATH",
    "Bye"
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
