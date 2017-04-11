// module dependencies
var dclassify = require('dclassify');

// Utilities provided by dclassify
var Classifier = dclassify.Classifier;
var DataSet    = dclassify.DataSet;
var Document   = dclassify.Document;

// create some 'bad' test items (name, array of characteristics)
var item1 = new Document('item1', ['forgot password','lost password','does not remember passsword']);
var item2 = new Document('item2', ['want help recover password','recover password','reset password']);
//var item3 = new Document('item3', ['a','d','e']);

// create some 'good' items (name, characteristics)
var itemA = new Document('itemA', ['forgot username', 'forgot userid']);
var itemB = new Document('itemB', ['lost username','lost userid']);
var itemC = new Document('itemC', ['recover username','recover userid','want help retrieve userid']);

// create a DataSet and add test items to appropriate categories
// this is 'curated' data for training
var data = new DataSet();
data.add('reset_password',  [item1, item2]);
data.add('recover_userid', [itemA, itemB, itemC]);

// an optimisation for working with small vocabularies
var options = {
    applyInverse: true
};

// create a classifier
var classifier = new Classifier(options);

// train the classifier
classifier.train(data);
console.log('Classifier trained.');
//console.log(JSON.stringify(classifier.probabilities, null, 4));

// test the classifier on a new test item
var testDoc = new Document('testDoc', ['forgot', 'password']);
var result1 = classifier.classify(testDoc);
console.log(result1);
