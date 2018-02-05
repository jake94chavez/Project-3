const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/front_end");

module.exports.Post = require("./post");
module.exports.Comment = require("./comment");