var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsUsersSchema = new Schema({
    idUser: Number,
    products: Array
}, {collection: 'productsUsers'}, { versionKey: false });

module.exports = mongoose.model("ProductUser", productsUsersSchema);
