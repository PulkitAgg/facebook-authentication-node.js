// Get the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// CODE FOR FB AUTHENTICATION
passport.use(new FacebookStrategy({
    clientID: "1518466381508487",
    clientSecret: "80b6ebb847f6c30a01fba5893745ddbb",
    callbackURL: "http://localhost:8888/auth/facebook/callback",
     profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
       console.log("data: profile",profile);
      return done(null, profile);
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



// Create Express application
var app = module.exports = express();

app.use(passport.initialize());
app.use(passport.session());

var NODE_ENV = 'development';
//Set Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes = require('./routes/routes');

app.use(routes);

// Use environment defined port or 8888
var port = process.env.PORT || 8888;

// Start the server
app.listen(port);
console.log('Server starts on port ' + port);
