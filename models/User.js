const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
})

module.exports = mongoose.model('User', userSchema)