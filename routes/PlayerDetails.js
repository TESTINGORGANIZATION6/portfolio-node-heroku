const router = require('express').Router();
const Player = require('../models/PlayerData');
const { playerValidation } = require('../Validations/Player-Validation');
const verify = require('../Validations/verifyToken');


router.post('/create', verify, async (req, res) => {
    const { error } = playerValidation(req.body);
    if (error)
        return res.status(400).send(error);
        //.send({status:false,message:error.details[0].message})

    const player = new Player({
        UserId: req.body.UserId,
        //SETP 1
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateOfBirth: req.body.DateOfBirth,
        Nationality: req.body.Nationality,
        Height: req.body.Height,
        Weight: req.body.Weight,
        //Step 2
        //Step 2
        Position: req.body.Position,
        Role: req.body.Role,
        Foot: req.body.Foot,
        Skills: req.body.Skills,
        Agent: req.body.Agent,
        //Step 3
        // CurrentClubName: req.body.CurrentClubName,
        // CurrentClubFrom: req.body.CurrentClubFrom,
        // CurrentClubTo: req.body.CurrentClubTo,
        // CurrentClubsAchievements: req.body.CurrentClubsAchievements,
        Clubs: req.body.Clubs,
        //Step 4
        Ratings:{
            Catching: req.body.Catching,
            Punching: req.body.Punching,
            Throwing: req.body.Throwing,
            Reflexes: req.body.Reflexes,
            Distribution: req.body.Distribution,
            Center_Defender: req.body.Center_Defender,
            Right_Back: req.body.Right_Back,
            Left_Back: req.body.Left_Back,
            Agility: req.body.Agility,
            Tackle: req.body.Tackle,
            Strength: req.body.Strength,
            Positioning: req.body.Positioning,
            Communication: req.body.Communication,
            Ariel_Ability: req.body.Ariel_Ability,
            Vision: req.body.Vision,
            Crossing: req.body.Crossing,
            Fitness: req.body.Fitness,
            Shooting: req.body.Shooting,
            Ball_Control: req.body.Ball_Control,
            Dribbling: req.body.Dribbling,
            First_Touch: req.body.First_Touch,
            Passing: req.body.Passing,
            Heading: req.body.Heading
        },        
        //Step 5
        Ambition: req.body.Ambition,
        MobileNumber: req.body.MobileNumber,
        AlternateMobileNumber: req.body.MobileNumber,
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
                    DateOfBirth: req.body.DateOfBirth,
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
                    // CurrentClubName: req.body.CurrentClubName,
                    // CurrentClubFrom: req.body.CurrentClubFrom,
                    // CurrentClubTo: req.body.CurrentClubTo,
                    // CurrentClubsAchievements: req.body.CurrentClubsAchievements,
                    Clubs: req.body.Clubs,
                    //Step 4
                    Ratings: {
                        Catching: req.body.Catching,
                        Punching: req.body.Punching,
                        Throwing: req.body.Throwing,
                        Reflexes: req.body.Reflexes,
                        Distribution: req.body.Distribution,
                        Center_Defender: req.body.Center_Defender,
                        Right_Back: req.body.Right_Back,
                        Left_Back: req.body.Left_Back,
                        Agility: req.body.Agility,
                        Tackle: req.body.Tackle,
                        Strength: req.body.Strength,
                        Positioning: req.body.Positioning,
                        Communication: req.body.Communication,
                        Ariel_Ability: req.body.Ariel_Ability,
                        Vision: req.body.Vision,
                        Crossing: req.body.Crossing,
                        Fitness: req.body.Fitness,
                        Shooting: req.body.Shooting,
                        Ball_Control: req.body.Ball_Control,
                        Dribbling: req.body.Dribbling,
                        First_Touch: req.body.First_Touch,
                        Passing: req.body.Passing,
                        Heading: req.body.Heading,
                    },
                    //Step 5
                    Ambition: req.body.Ambition,
                    MobileNumber: req.body.MobileNumber,
                    AlternateMobileNumber: req.body.MobileNumber,
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