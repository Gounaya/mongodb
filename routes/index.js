var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home );

module.exports = router;
