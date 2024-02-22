const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    },
    username: {
        type: String,
        required: true
    },
    resetLink: {
        data: String,
        default: ''
    },
    role: {
        type: String,
        default: 'admin'
    },
    image: { type: String, required: true, default:""},
    versionKey: false
})

module.exports=mongoose.model("Admin", adminSchema)