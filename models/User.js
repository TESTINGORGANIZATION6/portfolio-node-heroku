const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    LastName: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    Email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    Role:{
        type: String,
        required: true        
    },
    Password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    RegistrationDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports= mongoose.model('User',userSchema);