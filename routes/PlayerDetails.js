const router = require('express').Router();
const verify = require('../Validations/verifyToken');
const {create,update,getplayer} = require('../controllers/playercontroller');

router.post('/create',verify,create);

router.post('/update',verify,update);

router.get('/:playerId', verify,getplayer);

module.exports = router;