const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    LogType: {
        type: String,
        required: true
    },
    FileName: {
        type: String
    },
    FunctionName: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    Message:{
        type: Object,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('log', logSchema);