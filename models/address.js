var addressSchema = new mongoose.Schema({
    number : { type : Number, min : 1 },
    street : String,
    zip : Number,
    town : { type : String, required : true}
});

module.exports = addressSchema;
