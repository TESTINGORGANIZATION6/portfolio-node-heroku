const router = require('express').Router();
const passport = require('passport')
const CLIENT_HOME_PAGE_URL = `http://${process.env.CLIENT_HOME_PAGE_URL}`

// Import controllers
const {
  googleSuccess,
  googleFailed
} = require('../controllers/googlecontroller');

router.get('/google', passport.authenticate('google',
{
  scope: ['profile', 'email']
}
));

router.get('/login/success', googleSuccess);

router.get('/login/failed', googleFailed);

router.get('/google/redirect', passport.authenticate('google', {
  failureRedirect: "/auth/login/failed"
}), (req, res) => {
  const token = req.user._id
  res.redirect(`${CLIENT_HOME_PAGE_URL}?token=${token}&user=google`)
});

module.exports = router;
