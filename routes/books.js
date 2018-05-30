var express = require('express');
var router = express.Router();

// import controller for books
var booksController = require('../controllers/books');


router.get('/', booksController.list);
router.get('/one', booksController.one);
router.get('/dune', booksController.dune);
router.get('/year1', booksController.year1);
router.get('/year2', booksController.year2);
router.get('/details1/:bookId', booksController.details1 );
router.get('/details2/:bookId', booksController.details2 );

router.get('/create', booksController.createHome );
router.post('/create', booksController.create );

router.get('/adddetails/:bookId', booksController.addDetailsForm);
router.post('/adddetails/:bookId', booksController.addDetails);

router.get('/update/:bookId', booksController.updateForm );
router.put('/update/:bookId', booksController.update );

router.get('/delete/:bookId', booksController.delete );

module.exports = router;
