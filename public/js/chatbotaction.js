var sampleConversation = [
    "Hi",
    "My name is Fry",
    "Where is China?",
    "What is the population of China?",
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
