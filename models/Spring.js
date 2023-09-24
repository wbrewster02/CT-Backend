const mongoose = require('mongoose')

const SpringSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
})

module.exports = mongoose.model('Spring', SpringSchema)