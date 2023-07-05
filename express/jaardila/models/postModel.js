var mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    permalink: {
        type: String,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("post", postSchema);