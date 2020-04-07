const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signUpValidation, loginValidation } = require('../Validations/signUp-Validation');
const verify = require('../Validations/verifyToken')


router.post('/signup', async (req, res) => {
    const { error } = signUpValidation(req.body);

    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });

    const emailExists = await User.findOne({ Email: req.body.Email });
    if (emailExists)
        return res.status(200).send({ success: false, message: 'Email Already Exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    const user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Role: req.body.Role,
        Password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({ userId: user._id, message: 'User successfully reqistered' })
    }
    catch (e) {
        res.status(400).send(e);
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });

    const user = await User.findOne({ Email: req.body.Email });
    if (!user)
        return res.status(200).send({ success: false, message: 'Email or Password Incorrect' });

    const validPassord = await bcrypt.compare(req.body.Password, user.Password);
    if (!validPassord)
        return res.status(200).send({ success: false, message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send({ userId: user._id, token: token });

});


router.get('/:userId', verify, async (req, res) => {
    try {

        // const user = await User.find();
        // res.send(user);

        const user = await User.findOne(req.param.userId);
        res.send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }

});

module.exports = router;