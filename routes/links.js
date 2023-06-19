var express = require('express');
var router = express.Router();
var linksCtrl = require('../controllers/links');

router.get('/', linksCtrl.index);

module.exports = router;