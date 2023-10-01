const mongoose = require('mongoose')

const SpringSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lotdate: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    initialcount: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Spring', SpringSchema)