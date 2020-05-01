const Log = require('../Log/logConfig');
const fs = require('fs');

exports.insertLog = async (req, res) => {
    try {       
       
        Log.logger.log({
            level: req.body.LogType,
            FileName: req.body.FileName,
            FunctionName: req.body.FunctionName,
            CreatedDate: new Date(),
            Message: req.body.Message
        });     
        res.send({ success:true, message: 'log inserted.' })  
    }
    catch (e) {
        res.status(400).send({ success:false, message: 'log failed' });
    }
};


exports.getLogs=async(req,res)=>{
    try {  
        let data = fs.readFileSync('portfolio.log', 'utf8');
        res.send({ success:true, logs: "["+ data.toString().replace(/(\r\n|\n|\r)/gm,',')+"]" })  
    } catch(e) {
        console.log('Error:', e.stack);
    }
}