'use strict';

const natural = require('natural');
const classifier = new natural.BayesClassifier();

classifier.addDocument(['hi', 'hello', 'howdy', 'hey'], '_greet');
classifier.addDocument('Thank you', '_thank');
classifier.addDocument('Thanks a lot', '_thank');
classifier.addDocument('I need help', '_help');
classifier.addDocument('I am looking for help', '_help');

classifier.addDocument('I forgot my password', '_forgot_password');
classifier.addDocument('I lost my password', '_forgot_password');
classifier.addDocument('I need to find my password', '_forgot_password');


classifier.addDocument('I forgot my user id', '_forgot_userid');
classifier.addDocument('I lost my user id', '_forgot_userid');
classifier.addDocument('I need to find my user id', '_forgot_userid');

classifier.addDocument(['trouble', 'log in', 'forgot', 'credential'], '_forgot_userid_password');

classifier.addDocument(['no', 'nope', 'neah', 'never', 'incorrect', 'that is not right', 'not correct'], '_negetive');
classifier.addDocument(['yes', 'yep', 'yeah', 'yeh', 'correct', 'right'], '_positive');

classifier.addDocument('My user id is', 'provide_userid');
classifier.addDocument('My user name is', 'provide_userid');
classifier.addDocument('here is my user id', 'provide_userid');
classifier.addDocument('here is my user name', 'provide_userid');

classifier.addDocument('My email id is', 'provide_email');
classifier.addDocument('My email address is', 'provide_email');
classifier.addDocument('here is my email', 'provide_email');
classifier.addDocument('here is email', 'provide_email');

classifier.addDocument(['bye', 'talk to you later', 'ttyl'], '_end');
classifier.addDocument('It was very nice talking to you', '_end');


classifier.train();

let text = 'Since yerterday, I could not log in';
console.log(classifier.classify(text));
console.log(classifier.getClassifications(text));
// console.log(text.tokenizeAndStem());
