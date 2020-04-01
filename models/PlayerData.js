const mongoose = require('mongoose');

const playerSchemna = new mongoose.Schema({
    UserId: {
        type: String,
        required: true
    },
    //SETP 1
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
    DateOfBith: {
        type: Date,
        required: true,
    },
    Nationality: {
        type: String,
        required: true
    },
    Height: {
        type: Number,
        required: true
    },
    Weight: {
        type: Number,
        required: true
    },
    //Step 2
    Position: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    Foot: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    Agent: {
        type: String
    },
    //Step 3
    Clubs: [{
        ClubName: {
            type: String
        },
        From: {
            type: Date
        },
        To: {
            type: Date
        }
    }],
    //Step 4
    Heading: {
        type: Number,
        default: 0
    },
    Shooting: {
        type: Number,
        default: 0
    },
    Passing: {
        type: Number,
        default: 0
    },
    Dribbling: {
        type: Number,
        default: 0
    },
    BallControl: {
        type: Number,
        default: 0
    },
    Crossing: {
        type: Number,
        default: 0
    },
    Ambition: {
        type: String
    },
    MobileNumber: {
        type: Number,
    },
    Email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    ReferencedCoach: {
        type: String
    }
});

module.exports = mongoose.model('Player', playerSchemna);