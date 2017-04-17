/* eslint-disable quotes, comma-dangle */
'use strict';

const natural = require('natural');
const classifier = new natural.BayesClassifier();
// const stemmer = natural.LancasterStemmer;
// stemmer.attach();
/**
 * [description]
 * @method
 * @return  {[type]}   [description]
 * This is a function
 * @author Somenath Ghosh
 * @version [version]
 * @date    2017-04-16
 */
let Classifier = (function() {
  let _reply = {
    '_greet': "Hi, I need help",
    '_thank': "Thank you",
    '_help': "I need help",
    '_forgot_userid': "I forgot user id",
    '_forgot_password': "I forgot password",
    '_provide_userid': "My user id is",
    '_provide_email': "My email id is",
    '_name': "My name is",
    '_bye': "bye",
    '_positive': "Yes",
    '_negetive': "No",
    '_end': "Bye",
    '_forgot_userid_password': "I need help",
  };

  let _train = () =>{
    classifier.addDocument(['hi', 'hello', 'howdy', 'hey'], '_greet');
    classifier.addDocument('thank you', '_thank');
    classifier.addDocument('thanks a lot', '_thank');
    classifier.addDocument('i need help', '_help');
    classifier.addDocument('i am looking for help', '_help');

    classifier.addDocument('i forgot my password', '_forgot_password');
    classifier.addDocument('i lost my password', '_forgot_password');
    classifier.addDocument('i need to find my password', '_forgot_password');
    classifier.addDocument('I have troble in logging in using my password', '_forgot_password');


    classifier.addDocument('i forgot my user id', '_forgot_userid');
    classifier.addDocument('i lost my user id', '_forgot_userid');
    classifier.addDocument('i need to find my user id', '_forgot_userid');
    classifier.addDocument('I have troble in logging in using my user id', '_forgot_password');

    classifier.addDocument('I am not able to log in', '_forgot_userid_password');
    classifier.addDocument('I am having trouble logging in', '_forgot_userid_password');
    classifier.addDocument('I forgot my credential', '_forgot_userid_password');

    classifier.addDocument('That is incorrect', '_negetive');
    classifier.addDocument('That is not correct', '_negetive');

    classifier.addDocument('That is correct', '_positive');
    classifier.addDocument('That is right', '_positive');
    classifier.addDocument('You are correct', '_positive')

    classifier.addDocument('my name is somenath Ghosh', '_name');
    classifier.addDocument('i am brandon rodenmayer', '_name');

    classifier.addDocument('my user id is xxxxxxxx', '_provide_userid');
    classifier.addDocument('my user name is somenath.ghosh', '_provide_userid');
    classifier.addDocument('here is my user id brandon.g.rodenmayer', '_provide_userid');
    classifier.addDocument('here is my user name brandon.g.rodenmayer', '_provide_userid');

    classifier.addDocument('my email id is somenath.ghosh@ts.com', '_provide_email');
    classifier.addDocument('my email address is somenath.ghosh@ts.com', '_provide_email');
    classifier.addDocument('here is my email brandon.g.rodenmayer@ts.com ', '_provide_email');
    classifier.addDocument('here is email somenath.ghosh@ts.com', '_provide_email');

    classifier.addDocument(['bye', 'talk to you later', 'ttyl'], '_end');
    classifier.addDocument('it was very nice talking to you', '_end');

    classifier.train();
  }
  let _input = (text) => {
    let r = /(?:Received):\s(.+)\s(?:Entry):\s(.+)/i;
    try {
      let matches = text.match(r);
      if(matches[1] !== undefined || matches[1] !== null || matches[1] !== ''){
        return matches[1];
      } else {
        return '';
      }
    } catch(err) {
      console.error('DDGR/classifier : ===> ', err);
    }
  };

  class Classifier {
    constructor() {
      _train();
    }
    identify(text) {
      text = _input(text);
      // console.log('Classifer got text', text);
      return classifier.classify(text);
    }
    reply(text) {
      // let original = text;
      let r = /(?:Received):\s(.+)\s(?:Entry):\s(.+)/i;
      let matches = text.match(r);
      let modifieReceived = _reply[this.identify(text)];
      let buildText = "Received: "+modifieReceived+" Entry: "+ matches[2];
      return buildText;
    }
  }
  return Classifier;
})();


module.exports = (() => {
  let classifier = new Classifier();
  return {
    new: () =>{
      if(!classifier) {
        console.log('creating new classifier');
        return new Classifier();
      } else {
        console.log('Returning already created classifier');
        return classifier;
      }
    },
  };
})();

// let text = 'I need urgent help in retrieving my userid';
// console.log(classifier.classify(text));
// console.log(text.tokenizeAndStem());
