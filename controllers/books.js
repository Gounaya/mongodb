/* retrieve model */
var Books = require('../models/books').model;

/* controller function for GET / path */
var list =
  (req, res) =>
      Books.find()
           .then( allBooks => res.render('books',
                                         { title : 'Book List',
                                           request : 'Books.find()',
                                           books : allBooks } ) );
/* controller for GET /one */
var one =
 (req, res) =>
     Books.findOne()
          .then( book => res.render('bookdetail',
                                        { title : 'Only first book from list',
                                          request : 'Books.findOne()',
                                          book : book } ) );
/* controller for GET /dune */
var dune =
 (req, res) =>
     Books.find({title : 'Dune'})
          .then( allBooks => res.render('books',
                                        { title : 'Only Dune',
                                          request : "Books.find({title : 'Dune'})",
                                          books : allBooks } ) );
/* controller for GET /year1 */
var year1 =
 (req, res) =>
     Books.find({year : {$gt : 2000} })
          .then( allBooks => res.render('books',
                                        { title : 'books only after 2000',
                                          request : 'Books.find({year : {$gt : 2000} })',
                                          books : allBooks } ) );
/* controller for GET /year2 */
var year2 =
 (req, res) =>
     Books.find().where('year').gt(2000)
          .then( allBooks => res.render('books',
                                        { title : 'Books only after 2000',
                                          request : "Books.find().where('year').gt(2000)",
                                          books : allBooks } ) );

/* controller for GET /details1/:bookId */
var details1 =
  (req, res) =>
    Books.findOne({ _id : req.params.bookId })
      .then( book => res.render('bookdetail',
                                    { title : 'Book by _id using find()',
                                      request : 'Books.findOne({ _id : ObjectId(req.params.bookId)})',
                                      book : book } ) );
/* controller for GET /details2/:bookId */
var details2 =
  (req, res) =>
    Books.findById( req.params.bookId )
      .then( book => res.render('bookdetail',
                                    { title : 'Book by _id using findById()',
                                      request : 'Books.findById( req.params.bookId )',
                                      book : book } ) );




/* controller for GET /create */
var createHome =
  (req,res) => res.render('createBook');
/* controller for POST /create */
var createBook =
  (req, res, err) => {
    //let newBook = { title : req.body.title, author : req.body.author, year : req.body.year, cover : req.body.cover };
    let newBook = { ...req.body };
    Books.create(newBook)
      .then( newBook => res.status(200).json(newBook) )
      .catch( error => res.status(400).json(error) );
  }


/* details adding */
/* controller for GET /details/:bookId */
var addDetailsForm =
  (req, res) =>
    Books.findById( req.params.bookId )
      .then( book => res.render('addDetails', { book : book }) );

/* controller for POST /details/:bookId */
var addDetails =
  (req, res, err) => {
    let details = { ...req.body };
    Books.findById( req.params.bookId )
      .then( book => {
                       book.details = details;
                       return book.save();
                     })
      .then( book => res.status(200).json(book))
      .catch( error => res.status(400).json(error) );
  }


/* updating */
/* controller for GET /update/:bookId */
var updateForm =
  (req,res) =>
  Books.findById( req.params.bookId )
    .then( book => res.render('updateBook', { book : book }) );

/* controller for PUT /update/:bookId */
var updateBook =
  (req,res,err) => {
    let updatedBook = { ...req.body };
//  Books.findById( req.params.bookId ).update(updatedBook)
    Books.findByIdAndUpdate( req.params.bookId, updatedBook )
      .then( () => res.status(200).json({id : req.params.bookId}) )
      .catch( error => res.status(400).json(error) );

  }

/* deleting */
var deleteBook =
  (req,res,err) => {
    Books.findById( req.params.bookId ).remove()
    //Books.findByIdAndRemove( req.params.bookId )
      .then( () => res.redirect('/books') )
      .catch( error => { throw error } );
  }


/*====================*/
/* export controllers */
module.exports.list = list;
module.exports.one = one;
module.exports.dune = dune;
module.exports.year1 = year1;
module.exports.year2 = year2;
module.exports.details1 = details1;
module.exports.details2 = details2;
module.exports.createHome = createHome;
module.exports.create = createBook;
module.exports.addDetailsForm = addDetailsForm;
module.exports.addDetails = addDetails;
module.exports.updateForm = updateForm;
module.exports.update = updateBook;
module.exports.delete = deleteBook;
