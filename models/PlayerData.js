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
    DateOfBirth: {
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
    },
    Agent: {
        type: String
    },
    //Step 3
    // CurrentClubName: {
    //     type: String
    // },
    // CurrentClubFrom: {
    //     type: Date
    // },
    // CurrentClubTo: {
    //     type: Date
    // },
    // CurrentClubsAchievements: {
    //     type: String
    // },
    Clubs: [{
        ClubName: {
            type: String
        },
        From: {
            type: Date
        },
        To: {
            type: Date
        },
        Achievements: {
            type: String
        }
    }],
    //Step 4
    Ratings:{
        Catching: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Punching: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Throwing: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Reflexes: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Distribution: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Center_Defender : {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Right_Back: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Left_Back: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Agility: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Tackle: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Strength: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Positioning: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Communication: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Ariel_Ability: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Vision: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Crossing: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Fitness: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Shooting: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Ball_Control: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Dribbling: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        First_Touch: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Passing: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
        Heading: {
            type: Number,
            default: 0,
            max: 10,
            min: 0
        },
    },    
    Ambition: {
        type: String
    },
    MobileNumber: {
        type: Number,
    },
    AlternateMobileNumber: {
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
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchemna);