var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ComprasSchema = new Schema({
    idUser: Number,
    products: Array,
    address: Array,
    validation: String
}, { versionKey: false });

module.exports = mongoose.model("Compra", ComprasSchema, 'compras');
