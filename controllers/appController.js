var passport = require('passport');

exports.login = function(req, res) {
     res.send('<a href="http://localhost:8888/auth/facebook">Login With facebook</a>');
}

exports.successfullyLogin = function(req, res) {
     res.send('<p>You are successfully login with facebook</p>');
}


exports.facebookRedirect = function(req,res){
     return passport.authenticate('facebook');
}


exports.callbackHandler = function(req, res) {
     return passport.authenticate('facebook', {
          successRedirect: '/successfully-login',
          failureRedirect: '/'
     });
}
