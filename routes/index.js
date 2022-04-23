const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home-controller');

router.get('/' , homeController.home );
router.get('/meta' , homeController.tagPage );
router.post('/meta-result' , homeController.tagChecker);
router.get('/dns' , homeController.dnsPage );
router.post('/dns-result' , homeController.dnsChecker);


module.exports = router ; 