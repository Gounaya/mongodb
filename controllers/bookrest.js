var Books = require('../models/books').model;

var home =
  (req,res) =>
        Books.find()
             .then( allBooks => res.render('bookrest',
                                           { title : 'Book REST test',
                                             books : allBooks } ) );

var getBook =
  (req,res) =>
    Books.findById( req.params.bookId )
         .then( book => res.status(200).json(book) );

var createBook =
  (req,res) => {
    let newBook = { ...req.body };
    Books.create(newBook)
         .then( book => res.status(200).json(book) );
  }

var updateBook =
  (req, res) => {
    let updatedBook = { ...req.body };
    Books.findByIdAndUpdate( req.params.bookId, updatedBook, { new : true } )
         .then( book => res.status(200).json(book) );
  }

var deleteBook =
  (req,res) =>
      Books.findByIdAndRemove( req.params.bookId )
           .then( () => res.status(200).end() );


module.exports.home = home;
module.exports.getBook = getBook;
module.exports.createBook = createBook;
module.exports.updateBook = updateBook;
module.exports.deleteBook = deleteBook;
