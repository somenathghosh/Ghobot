var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Ghobot = mongoose.model('Ghobot');

module.exports = function (app) {
  //console.log('Ghobot: I am here');
  app.get('/ghobot', router);
};

router.get('/ghobot', function (req, res, next) {

  res.render('ghobot', {
      title: 'MD - Bot'
  });

  Ghobot.find(function (err, questions) {
    console.log(questions);
    if (err) return next(err);

  });
});
