var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Ghobot = mongoose.model('Ghobot');

module.exports = function (app) {
  app.use('/ghobot', router);
};

router.get('/ghobot', function (req, res, next) {
  Ghobot.find(function (err, questions) {
    if (err) return next(err);
    res.render('ghobot', {
      title: 'MD - Bot',
      questions: questions
    });
  });
});