const mongoose = require('mongoose')

const SpringSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lotdate: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    initialCount: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Spring', SpringSchema)