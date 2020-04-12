const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');

passport.use(
  new GoogleStrategy({
    clientID: process.env.clientID_prod,
    clientSecret: process.env.clientSecret_prod,
    callbackURL: "/api/Auth/google/redirect"
  }, (accessToken, 
      refreshToken,
      profile,
      done) => {
        User.findOne({ sso: profile.id })
          .then((user, err) => {
            if(user || err) {
              console.log('already have user');
              done(err, user);
            } else {
              new User({
                UserName: profile.displayName,
                sso: profile.id,
                FirstName: profile.name.givenName,
                LastName: profile.name.familyName,
                Email: profile.emails[0].value,
                Password: 'assanAhasas@21242323'
              }).save().then((user, err) => {
                done(err, user)
              })
            }
          });
      })
);

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

