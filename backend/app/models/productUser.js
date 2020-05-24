var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsUsersSchema = new Schema({
    idUser: Number,
    products: Array
}, { versionKey: false });

module.exports = mongoose.model("ProductUser", productsUsersSchema, 'productsUsers');
