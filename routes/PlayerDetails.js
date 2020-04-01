const router = require('express').Router();
const Player = require('../models/PlayerData');
const { playerValidation } = require('../Validations/Player-Validation');
const verify = require('../Validations/verifyToken');


router.post('/create', verify, async (req, res) => {
    const { error } = playerValidation(req.body);
    if (error)
        return res.status(400).send(error.details[0].message)

    const player = new Player({
        UserId: req.body.UserId,
        //SETP 1
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateOfBith: req.body.DateOfBith,
        Nationality: req.body.Nationality,
        Height: req.body.Height,
        Weight: req.body.Weight,
        //Step 2
        Position: req.body.Position,
        Role: req.body.Role,
        Foot: req.body.Foot,
        Skills: req.body.Skills,
        Agent: req.body.Agent,
        //Step 3
        Clubs: req.body.Clubs,
        //Step 4
        Heading: req.body.Heading,
        Shooting: req.body.Shooting,
        Passing: req.body.Passing,
        Dribbling: req.body.Dribbling,
        BallControl: req.body.BallControl,
        Crossing: req.body.Crossing,
        Ambition: req.body.Ambition,
        MobileNumber: req.body.MobileNumber,
        Email: req.body.Email,
        ReferencedCoach: req.body.ReferencedCoach
    });

    try {
        const savedPlayer = await player.save();
        res.send({ player: player._id, message: 'Player details saved' })
    }
    catch (e) {
        res.status(400).send(e);
    }
});

router.post('/update', verify, async (req, res) => {
    const { error } = playerValidation(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    try {
        const savedPlayer = await Player.updateOne(
            { UserId: req.body.UserId },
            {
                $set: {
                    //SETP 1
                    FirstName: req.body.FirstName,
                    LastName: req.body.LastName,
                    DateOfBith: req.body.DateOfBith,
                    Nationality: req.body.Nationality,
                    Height: req.body.Height,
                    Weight: req.body.Weight,
                    //Step 2
                    Position: req.body.Position,
                    Role: req.body.Role,
                    Foot: req.body.Foot,
                    Skills: req.body.Skills,
                    Agent: req.body.Agent,
                    //Step 3
                    Clubs: req.body.Clubs,
                    //Step 4
                    Heading: req.body.Heading,
                    Shooting: req.body.Shooting,
                    Passing: req.body.Passing,
                    Dribbling: req.body.Dribbling,
                    BallControl: req.body.BallControl,
                    Crossing: req.body.Crossing,
                    Ambition: req.body.Ambition,
                    MobileNumber: req.body.MobileNumber,
                    Email: req.body.Email,
                    ReferencedCoach: req.body.ReferencedCoach
                }
            }
        );
        res.send({ player: savedPlayer, message: 'Player details updated.' })
    }
    catch (e) {
        res.status(400).send(e);
    }
});


router.get('/:playerId', verify, async (req, res) => {
    try {

        // const user = await User.find();
        // res.send(user);

        const player = await Player.findOne({ UserId: req.params.playerId });
        res.send(player);
    }
    catch (e) {
        res.status(400).send(e);
    }

});

module.exports = router;