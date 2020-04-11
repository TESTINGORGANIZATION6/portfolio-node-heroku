const Player = require('../models/PlayerData');
const { playerValidation } = require('../Validations/Player-Validation');




exports.create = async (req, res) => {
    const { error } = playerValidation(req.body);
    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });

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
        Ratings: {
            Catching: req.body.Ratings.Catching,
            Punching: req.body.Ratings.Punching,
            Throwing: req.body.Ratings.Throwing,
            Reflexes: req.body.Ratings.Reflexes,
            Distribution: req.body.Ratings.Distribution,
            Center_Defender: req.body.Ratings.Center_Defender,
            Right_Back: req.body.Ratings.Right_Back,
            Left_Back: req.body.Ratings.Left_Back,
            Agility: req.body.Ratings.Agility,
            Tackle: req.body.Ratings.Tackle,
            Strength: req.body.Ratings.Strength,
            Positioning: req.body.Ratings.Positioning,
            Communication: req.body.Ratings.Communication,
            Ariel_Ability: req.body.Ratings.Ariel_Ability,
            Vision: req.body.Ratings.Vision,
            Crossing: req.body.Ratings.Crossing,
            Fitness: req.body.Ratings.Fitness,
            Shooting: req.body.Ratings.Shooting,
            Ball_Control: req.body.Ratings.Ball_Control,
            Dribbling: req.body.Ratings.Dribbling,
            First_Touch: req.body.Ratings.First_Touch,
            Passing: req.body.Ratings.Passing,
            Heading: req.body.Ratings.Heading
        },
        //Step 5
        Ambition: req.body.Ambition,
        MobileNumber: req.body.MobileNumber,
        AlternateMobileNumber: req.body.AlternateMobileNumber,
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
};

exports.update=async (req,res)=>{
    const { error } = playerValidation(req.body);
    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });
    console.log(req);
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
                        Catching: req.body.Ratings.Catching,
                        Punching: req.body.Ratings.Punching,
                        Throwing: req.body.Ratings.Throwing,
                        Reflexes: req.body.Ratings.Reflexes,
                        Distribution: req.body.Ratings.Distribution,
                        Center_Defender: req.body.Ratings.Center_Defender,
                        Right_Back: req.body.Ratings.Right_Back,
                        Left_Back: req.body.Ratings.Left_Back,
                        Agility: req.body.Ratings.Agility,
                        Tackle: req.body.Ratings.Tackle,
                        Strength: req.body.Ratings.Strength,
                        Positioning: req.body.Ratings.Positioning,
                        Communication: req.body.Ratings.Communication,
                        Ariel_Ability: req.body.Ratings.Ariel_Ability,
                        Vision: req.body.Ratings.Vision,
                        Crossing: req.body.Ratings.Crossing,
                        Fitness: req.body.Ratings.Fitness,
                        Shooting: req.body.Ratings.Shooting,
                        Ball_Control: req.body.Ratings.Ball_Control,
                        Dribbling: req.body.Ratings.Dribbling,
                        First_Touch: req.body.Ratings.First_Touch,
                        Passing: req.body.Ratings.Passing,
                        Heading: req.body.Ratings.Heading
                    },
                    //Step 5
                    Ambition: req.body.Ambition,
                    MobileNumber: req.body.MobileNumber,
                    AlternateMobileNumber: req.body.AlternateMobileNumber,
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
};

exports.getplayer=async (req,res)=>{
    try {

        // const user = await User.find();
        // res.send(user);

        const player = await Player.findOne({ UserId: req.query.playerId });
        res.send(player);
    }
    catch (e) {
        res.status(400).send(e);
    }
};

exports.changeProfileStatus=async(req,res)=>{
    
}