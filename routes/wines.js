var express = require('express');
var router = express.Router();
var winesCtrl = require('../controllers/wines');

router.get('/', winesCtrl.index);

module.exports = router;
