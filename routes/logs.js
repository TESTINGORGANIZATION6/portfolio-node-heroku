const router = require('express').Router();
const { insertLog,getLogs } = require('../controllers/logcontroller');

router.post('/insertlog', insertLog);
router.get('/getlogs', getLogs);


module.exports = router;