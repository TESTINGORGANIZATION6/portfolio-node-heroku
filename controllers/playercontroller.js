const Player = require('../models/PlayerData');
const { playerValidation } = require('../Validations/Player-Validation');
const Log = require('../Log/logConfig');
//const formidable = require('formidable');
// const fs = require('fs');
// var https = require('https');
// var MongoClient = require('mongodb').MongoClient;
// var Binary = require('mongodb').Binary;



exports.create = async (req, res) => {
    // let image_path = 'D:/Work/Git/Portfolio/portfolio-node-heroku/Uploads/Players/' + Date.now() + '.jpg';
    // saveImageToDisk(req.body.Photo, image_path);
    //console.log(Binary(fs.readFileSync(image_path)));
    //console.log(fs.readlink(req.body.Photo));
    // let form = new formidable.IncomingForm();
    // form.keepExtensions = true;
    // form.maxFieldsSize = 5 * 1024 * 1024 //5MB;
    // form.multiples = false;
    // let encoded = '';
    // let contentType = '';
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         res.status(400).send({ success: false, message: 'image could not be uploaded' })
    //     }
    //     encoded = fs.readFileSync(files.photo.path);
    //     contentType = files.photo.type;
    // });
    //console.log(Binary(fs.readFileSync(req.body.Photo)));

    const { error } = playerValidation(req.body);
    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });
    var matches = req.body.Photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches)
        return res.status(200).send({ success: false, message: 'Invalid Base64' });
    if (matches.length !== 3) {
        return res.status(200).send({ success: false, message: 'Invalid Base64' });
    }
    if (!checkImageSize(req.body.Photo))
        return res.status(200).send({ success: false, message: 'Profile image size must be less than 500KB' });

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
        ReferencedCoach: req.body.ReferencedCoach,
        Photo: req.body.Photo
    });

    try {
        const savedPlayer = await player.save();
        Log.logger.log({
            level: 'info',
            FileName: 'playercontroller.js',
            FunctionName: 'create-player',
            CreatedDate: new Date(),
            Message: 'Player Added-'+player._id
        });     
        res.send({ player: player._id, message: 'Player details saved' })
    }
    catch (e) {
        Log.logger.log({
            level: 'error',
            FileName: 'playercontroller.js',
            FunctionName: 'create-player',
            CreatedDate: new Date(),
            Message: e.stack
        });     
        res.status(400).send(e);
    };

};

exports.update = async (req, res) => {
    // let image_path = 'D:/Work/Git/Portfolio/portfolio-node-heroku/Uploads/Players/' + Date.now() + '.jpg';
    // saveImageToDisk(req.body.Photo.Path, image_path);
    // let encoded = fs.readFileSync(image_path);
    const { error } = playerValidation(req.body);
    if (error)
        return res.status(200).send({ success: false, message: error.details[0].message });

    var matches = req.body.Photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches)
        return res.status(200).send({ success: false, message: 'Invalid Base64' });
    if (matches.length !== 3) {
        return res.status(200).send({ success: false, message: 'Invalid Base64' });
    }

    if (!checkImageSize(req.body.Photo))
        return res.status(200).send({ success: false, message: 'Profile image size must be less than 500KB' });

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
                    ReferencedCoach: req.body.ReferencedCoach,
                    Photo: req.body.Photo
                }
            }
        );
        Log.logger.log({
            level: 'info',
            FileName: 'playercontroller.js',
            FunctionName: 'update-player',
            CreatedDate: new Date(),
            Message: 'Player updated-'+req.body.UserId
        });     
        res.send({ player: savedPlayer, message: 'Player details updated.' })
    }
    catch (e) {
        Log.logger.log({
            level: 'error',
            FileName: 'playercontroller.js',
            FunctionName: 'update-player',
            CreatedDate: new Date(),
            Message: e.stack
        });     
        res.status(400).send(e);
    }
};

exports.getplayer = async (req, res) => {
    try {

        // const user = await User.find();
        // res.send(user);

        const player = await Player.findOne({ UserId: req.query.playerId });
        res.send(player);
    }
    catch (e) {
        Log.logger.log({
            level: 'error',
            FileName: 'playercontroller.js',
            FunctionName: 'get-player',
            CreatedDate: new Date(),
            Message: e.stack
        });     
        res.status(400).send(e);
    }
};

// function saveImageToDisk(url, localPath) {
//     var fullUrl = url;
//     var file = fs.createWriteStream(localPath);
//     console.log(file);
//     let encoded;
//     var request = https.get(url, function (response) {
//         response.pipe(file);
//         // encoded = Binary(fs.readFileSync(file.path));
//         // console.log(encoded);
//         var data = fs.readFileSync(localPath);
//         var insert_data = {};
//         insert_data.file_data = Binary(data);
//         console.log(insert_data);
//     });

// }

function checkImageSize(imageBase64) {
    const stringLength = imageBase64.length - 'data:image/png;base64,'.length;
    const sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812;
    return Math.ceil(sizeInBytes / 1024) < 500;
}