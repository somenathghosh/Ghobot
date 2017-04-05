var express = require('express'),
  router = express.Router();
  // mongoose = require('mongoose'),
  // Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    //console.log(req.session);
    req.session.view = Math.random();
    res.render('ghobot', {
      title: 'HL Bot Services',
    });
});
