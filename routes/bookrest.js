var express = require('express');
var router = express.Router();

// import controller for books
var controller = require('../controllers/bookrest');

router.get('/', controller.home );
router.get( '/:bookId', controller.getBook );
router.post( '/', controller.createBook );
router.put( '/:bookId', controller.updateBook );
router.delete( '/:bookId', controller.deleteBook );

module.exports = router;
