const router = require('express').Router();
const { signup, login, getuser, checkusername, validateSession } = require('../controllers/signincontoller');
const verify = require('../Validations/verifyToken');


router.post('/signup', signup);

router.get('/checkusername', checkusername);

router.post('/login', login);

router.get('/', verify, getuser);

router.get('/verifysession', verify, validateSession);

module.exports = router;