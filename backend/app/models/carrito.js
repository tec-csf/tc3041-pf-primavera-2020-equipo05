var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarritosSchema = new Schema({
    idUser: Number,
    products: Array
}, { versionKey: false });

module.exports = mongoose.model("Carrito", CarritosSchema);
