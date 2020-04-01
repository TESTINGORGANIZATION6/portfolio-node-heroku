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
        Skills: Joi.string().required(),
        Agent: Joi.string(),
        //Step 3
        Clubs:Joi.array(),
        //Step 4
        Heading: Joi.number().required(),
        Shooting: Joi.number().required(),
        Passing: Joi.number().required(),
        Dribbling: Joi.number().required(),
        BallControl: Joi.number().required(),
        Crossing: Joi.number().required(),
        Ambition: Joi.string(),
        MobileNumber: Joi.number().required(),
        Email: Joi.string().required(),
        ReferencedCoach: Joi.string()
    });
    return  schema.validate(data)
}

module.exports.playerValidation=playerValidation
