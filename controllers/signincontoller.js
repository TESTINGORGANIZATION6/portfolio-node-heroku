const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signUpValidation, loginValidation } = require('../Validations/signUp-Validation');


exports.signup = async (req, res) => {
    debugger
    const { signUpError } = signUpValidation(req.body);
    if (signUpError)
        return res.status(200).send({ success: false, message: signUpError.details[0].message });

    const userNameError = await User.findOne({ UserName: req.body.UserName })
    if (userNameError)
        return res.status(200).send({ success: false, message: 'Username already exists' });

    const emailExists = await User.findOne({ Email: req.body.Email });
    if (emailExists)
        return res.status(200).send({ success: false, message: 'Email already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    const user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({ userId: user._id, message: 'User successfully reqistered' })
    }
    catch (e) {
        res.status(400).send(e);
    }
};

exports.login = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });

    const user = await User.findOne({ UserName: req.body.UserName });
    if (!user)
        return res.status(200).send({ success: false, message: 'Username or Password Incorrect' });

    const validPassord = await bcrypt.compare(req.body.Password, user.Password);
    if (!validPassord)
        return res.status(200).send({ success: false, message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send({ userId: user._id, token: token, message: 'Logged In successfully.' });
};

exports.getuser = async (req, res) => {
    try {

        // const user = await User.find();
        // res.send(user);

        const user = await User.findOne({ _id: req.query.userId });
        res.send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
};

exports.checkusername = async (req, res) => {
    try {
        if (req.query.userName.trim().length < 6)
            res.status(200).send({ success: false, message: 'Username must be minimum 6 characters.' });

        const userNameError = await User.findOne({ UserName: req.query.userName })
        if (userNameError)
            res.status(200).send({ success: false, message: 'Username already exists' });
        else
            res.status(200).send({ success: true, message: 'Username available' });
    }
    catch (e) {
        res.status(400).send(e);
    }
};

exports.validateSession = async (req, res) => {
    console.log(req)
    try {
        return res.status(200).send({ success: true, message: 'Valid Session' });
    }
    catch (err) {
        return res.status(401).send({ success: true, message: 'Session Expired' });
    }
};