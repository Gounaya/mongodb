var mongoose = require('mongoose');

/*
  setter for cover field in bookSchema, used to set a default value to cover field
*/
var setDefaultCover =
   cover => {
              if (cover === undefined || cover === "") {
                return  "/images/book.png"
              } else {
                return cover;
              }
            }

/* bookdetail Schema*/
var bookDetailsSchema = new mongoose.Schema({
  language : String,
  pages :  Number,
  series : String
});

/* schema for dbbooks/books collection */
var bookSchema = new mongoose.Schema({
  title : { type : String, required : true },
  author : String,
  cover : { type : String, set : setDefaultCover },
  year : Number,
  details : bookDetailsSchema
});




/* exports */
const dbConnection = require('../controllers/db');
var Books = dbConnection.model('Book',bookSchema,'books');

module.exports.schema = bookSchema;
module.exports.model = Books;
