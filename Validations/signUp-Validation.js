const Joi = require('@hapi/joi');
const User = require('../models/User')

const signUpValidation = (data) => {
    const schema = Joi.object({
        FirstName: Joi.string().min(2).required(),
        LastName: Joi.string().min(2).required(),
        UserName: Joi.string().min(6).required(),
        Email: Joi.string().min(6).required().email(),
        Password: Joi.string().min(6).required(),
    });
    return schema.validate(data)
};

const loginValidation = (data) => {
    const schema = Joi.object({
        UserName: Joi.string().min(6).required(),
        Password: Joi.string().min(6).required()
    });
    return schema.validate(data)
}

// const changeProfileStatusValidation = (data) => {
//     const schema = Joi.object({
//         UserID: Joi.string().min(6).required(),
//         ProfileStatus: Joi.bool()
//     });
//     return schema.validate(data)
// }


module.exports.signUpValidation = signUpValidation;
module.exports.loginValidation = loginValidation;