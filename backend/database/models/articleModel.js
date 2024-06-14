const mongoose = require("mongoose")

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    source: {
        type: String, 
        required: true
    },
    author: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    url: {
        type: String, 
        required: true
    },
    image_url: {
        type: String, 
        required: true
    },
    publish_date: {
        type: Date, 
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Article", articleSchema)

