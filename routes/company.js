var express = require('express');
var router = express.Router();
var companyCtrl = require('../controllers/company');

router.get('/', companyCtrl.index);

module.exports = router;