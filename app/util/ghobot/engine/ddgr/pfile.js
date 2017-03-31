const DDGR = require('./ddgr');
const Pattern = require('./pattern');

const ddgr = new DDGR();

ddgr.add(new Pattern("^(?:(?:hi)|(?:(?:hello))|(?:(?:howdy))|(?:(?:howdy my friend))|(?:(?:howdy friend))|(?:(?:hey|hey friend|hey buddy)))", "response", "howdy , friend, how are you doing?", undefined, "Say 'Good morning' to be greeted back."));

ddgr.add(new Pattern("(?:(?:I am fine)|(?:(?:fine))|(?:(?:am fine))|(?:(?:I am just doing fine))|(?:(?:doing ok))|(?:(?:okay)))", "response", "okay, what can I help you with? I do answer all of your query, just ask what you are looking for", undefined, "Say 'I am fine' to be greeted back."));

ddgr.add(new Pattern("(?:my name is|I'm|I am) (.*)", "response", "hi $1, thanks for talking to me today", function(matches) {
    return (matches[1] + ' >');
}, "Say 'My name is [your name]' or 'I am [name]' to be called that by the bot"));

//
// ddgr.add("^(?:(?:what's your name)|(?:(?:your name))|(?:(?:what is your name))|(?:(?:your name please))|(?:(?:how should I call you)))$", "response", "My name is Ghobot, a Bot made by Ghosh, Somenath", undefined, "Say 'What's your name' to know the name");
//
// ddgr.add("^(?:(?:good morning)|(?:(?:goodmorning))|(?:(?:morning)))$", "response", "good morning, friend", undefined, "Say 'Good morning' to be greeted back.");
//
// ddgr.add("^(?:(?:good afternoon)|(?:(?:good afternoon))|(?:(?:afternoon)))$", "response", "good afternoon, friend", undefined, "Say 'Good afternoon' to be greeted back.");
//
// ddgr.add("^(?:(?:are you ok)|(?:(?:are you okay))|(?:(?:r u okay))|(?:(?:r u ok)))$", "response", "yes, I am absolutely Okay, buddy", undefined, "Ask 'how are you' to be greeted back.");
//
// ddgr.add("^(?:(?:how are you)|(?:(?:how are you doing))|(?:(?:how is everything))|(?:(?:how is it going)))", "response", "yes, I am absolutely Okay, buddy, how are you doing?", undefined, "Say 'how are you doing' to be greeted back.");
//
// ddgr.add("^(?:(?:are you joking)|(?:(?:are you a jerk))|(?:(?:are you kidding))|(?:(?:are you kidding me)))", "response", "yes, I don't joke buddy, I am just a bot!", undefined, "Say 'are you joking or kidding' when answer is too funny.");
//
// ddgr.add("(?:(?:asshole)|(?:(?:fuck))|(?:(?:fucker))|(?:(?:idiot))|(?:(?:fcuk)))", "response", "I am sorry to hear that from you, you might get reported by the way!", undefined, "Say 'NO abusive words' ");
//
// ddgr.add("^(?:(?:what can you do for me)|(?:(?:what do you do))|(?:(?:how can you help me)))", "response", "I do answer all of your query, just ask what you are looking for", undefined, "Say 'What can you do for me' to know what Ghobot can do.");
//
// ddgr.add("^(?:(?:bye)|(?:(?:bye bye))|(?:(?:byebye))|(?:(?:see you))|(?:(?:talk to you later))|(?:(?:ttly)))", "response", "See you later buddy", undefined, "Say 'Bye' to end the conversation.");
//
// //ddgr.add("^bye$", "response", "See you later buddy", undefined, "Say 'Bye' to end the conversation.");
//
// ddgr.add("(?:my name is|I'm|I am) (.*)", "response", "hi $1, thanks for talking to me today", function(matches) {
//     return (matches[1] + ' >');
// }, "Say 'My name is [your name]' or 'I am [name]' to be called that by the bot");
//
// ddgr.add("(what is the )?meaning of life", "response", "42", undefined, "Say 'What is the meaning of life' to get the answer.");
//
// ddgr.add("Compute ([0-9]+) plus ([0-9]+)", "response", undefined, function(matches) {
//     return ("That would be " + (1 * matches[1] + 1 * matches[2]) + ".", "bot");
// }, "Say 'compute [number] plus [number]' to make the bot your math monkey");
