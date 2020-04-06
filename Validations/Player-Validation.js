const Joi = require('@hapi/joi');

const playerValidation = (data) => {
    const schema = Joi.object({
        UserId: Joi.string().required(),
        //SETP 1
        FirstName: Joi.string().min(2).required(),
        LastName: Joi.string().min(2).required(),
        DateOfBith: Joi.date().required(),
        Nationality: Joi.string().required(),
        Height: Joi.number().required(),
        Weight: Joi.number().required(),
        //Step 2
        Position: Joi.string().required(),
        Role: Joi.string().required(),
        Foot: Joi.string().required(),
        Skills: Joi.string(),
        Agent: Joi.string(),
        //Step 3
        // CurrentClubName:Joi.string(),
        // CurrentClubFrom:Joi.date(),
        // CurrentClubTo:Joi.date(),
        // CurrentClubsAchievements:Joi.string(),        
        Clubs: Joi.array(),
        //Step 4
        Catching: Joi.number().required().min(0).max(10),
        Punching: Joi.number().required().min(0).max(10),
        Throwing: Joi.number().required().min(0).max(10),
        Reflexes: Joi.number().required().min(0).max(10),
        Distribution: Joi.number().required().min(0).max(10),
        Center_Defender: Joi.number().required().min(0).max(10),
        Right_Back: Joi.number().required().min(0).max(10),
        Left_Back: Joi.number().required().min(0).max(10),
        Agility: Joi.number().required().min(0).max(10),
        Tackle: Joi.number().required().min(0).max(10),
        Strength: Joi.number().required().min(0).max(10),
        Positioning: Joi.number().required().min(0).max(10),
        Communication: Joi.number().required().min(0).max(10),
        Ariel_Ability: Joi.number().required().min(0).max(10),
        Vision: Joi.number().required().min(0).max(10),
        Crossing: Joi.number().required().min(0).max(10),
        Fitness: Joi.number().required().min(0).max(10),
        Shooting: Joi.number().required().min(0).max(10),
        Ball_Control: Joi.number().required().min(0).max(10),
        Dribbling: Joi.number().required().min(0).max(10),
        First_Touch: Joi.number().required().min(0).max(10),
        Passing: Joi.number().required().min(0).max(10),
        heading: Joi.number().required().min(0).max(10),
        //Step 5
        Ambition: Joi.string(),
        MobileNumber: Joi.number().required(),
        AlternateMobileNumber:Joi.number(),
        Email: Joi.string().required(),
        ReferencedCoach: Joi.string()
    });
    return schema.validate(data)
}

module.exports.playerValidation = playerValidation
