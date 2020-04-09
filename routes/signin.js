const router = require('express').Router();
const {signup,login,getuser,checkusername} = require('../controllers/signincontoller');
const verify = require('../Validations/verifyToken');


router.post('/signup',signup);

router.get('/checkusername/:userName',checkusername);

router.post('/login',login);

router.get('/:userId',verify,getuser);

module.exports = router;