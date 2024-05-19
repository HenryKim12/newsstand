const mongoose = require("mongoose")

const Schema = mongoose.Schema

const metaSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    post_date: {
        type: Date,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Meta_Post", metaSchema)
