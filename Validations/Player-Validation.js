const Joi = require('@hapi/joi');

const playerValidation = (data) => {
    const schema = Joi.object({
        UserId: Joi.string().required(),
        //SETP 1
        FirstName: Joi.string().min(2).required(),
        LastName: Joi.string().min(2).required(),
        DateOfBirth: Joi.date().required(),
        Nationality: Joi.string().required(),
        Height: Joi.number().required(),
        Weight: Joi.number().required(),
        //Step 2
        Position: Joi.string().required(),
        Role: Joi.string().required(),
        Foot: Joi.string().required(),
        Skills: Joi.string().optional().allow(''),
        Agent: Joi.string().optional().allow(''),
        //Step 3
        // CurrentClubName:Joi.string(),
        // CurrentClubFrom:Joi.date(),
        // CurrentClubTo:Joi.date(),
        // CurrentClubsAchievements:Joi.string(),        
        Clubs: Joi.array(),
        //Step 4
        Ratings: {
            Catching: Joi.number().min(0).max(10),
            Punching: Joi.number().min(0).max(10),
            Throwing: Joi.number().min(0).max(10),
            Reflexes: Joi.number().min(0).max(10),
            Distribution: Joi.number().min(0).max(10),
            Center_Defender: Joi.number().min(0).max(10),
            Right_Back: Joi.number().min(0).max(10),
            Left_Back: Joi.number().min(0).max(10),
            Agility: Joi.number().min(0).max(10),
            Tackle: Joi.number().min(0).max(10),
            Strength: Joi.number().min(0).max(10),
            Positioning: Joi.number().min(0).max(10),
            Communication: Joi.number().min(0).max(10),
            Ariel_Ability: Joi.number().min(0).max(10),
            Vision: Joi.number().min(0).max(10),
            Crossing: Joi.number().min(0).max(10),
            Fitness: Joi.number().min(0).max(10),
            Shooting: Joi.number().min(0).max(10),
            Ball_Control: Joi.number().min(0).max(10),
            Dribbling: Joi.number().min(0).max(10),
            First_Touch: Joi.number().min(0).max(10),
            Passing: Joi.number().min(0).max(10),
            Heading: Joi.number().min(0).max(10)
        },
        //Step 5
        Ambition: Joi.string().optional().allow(''),
        MobileNumber: Joi.number().required(),
        AlternateMobileNumber: Joi.number().optional().allow(''),
        Email: Joi.string().required(),
        ReferencedCoach: Joi.string().optional().allow(''),
        Photo:Joi.string(),
    });
    return schema.validate(data)
}

module.exports.playerValidation = playerValidation
