const express = require('express');
// defining router
const router = express.Router();
// calling controller (following MVC structure)
const homeController = require('../controllers/home-controller');

// Render HomePage
router.get('/' , homeController.home );

// Render Meta Tag Validator Page
router.get('/meta' , homeController.tagPage );

// First Endpoint to check meta data is present and shown its content
router.post('/meta-result' , homeController.tagChecker);

// Render Dns Validator Page
router.get('/dns' , homeController.dnsPage );

// Second Endpoint to check Dns TXT record presend or not and shown its content
router.post('/dns-result' , homeController.dnsChecker);


module.exports = router ; 