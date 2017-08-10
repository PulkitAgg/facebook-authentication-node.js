//import the required modules
var express = require('express');
var router = express.Router();
var appController = require('../controllers/appController');

//Routes of our app.
router.route('/')
     .get(appController.login);

router.route('/successfully-login')
     .get(appController.successfullyLogin);

router.route('/auth/facebook')
     .get(appController.facebookRedirect());

router.route('/auth/facebook/callback')
     .get(appController.callbackHandler());


//export the router
module.exports = router;
