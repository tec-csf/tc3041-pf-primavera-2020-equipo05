var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NewsFeedSchema = new Schema({
    idUser: Number,
    message: String
}, { versionKey: false });

module.exports = mongoose.model("NewsFeed", NewsFeedSchema, 'newsFeed');
