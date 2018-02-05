const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/RoughDraft");

module.exports.Post = require("./post");
module.exports.Comment = require("./comment");