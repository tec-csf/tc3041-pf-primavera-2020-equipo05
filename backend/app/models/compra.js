var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ComprasSchema = new Schema({
    idUser: Number,
    products: Array,
    validation: String
}, { versionKey: false });

module.exports = mongoose.model("Compra", ComprasSchema);
