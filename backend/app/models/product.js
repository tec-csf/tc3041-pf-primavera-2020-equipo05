var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    idProd: Number,
    name: String,
    condition: String,
    description: String,
    quantity: Number,
    price: Number,
    url: String
}, { versionKey: false });

module.exports = mongoose.model("Product", ProductsSchema);
