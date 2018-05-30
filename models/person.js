var addressSchema = require('./address');

var personSchema = new mongoose.Schema({
    name : { type : String, required : true },
    surnames : [String],
    age : { type : Number, default : 18, set : v => Math.floor(v) },
    birth : Date,
    address : addressSchema
});


module.exports = personSchema;
