const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
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

// displayName
passport.use(
  new FacebookStrategy({
    clientID: process.env.CLIENT_ID_FB,
    clientSecret: process.env.CLIENT_SECRET_FB,
    callbackURL: "/api/auth/facebook/redirect"
  }, (accessToken,
      refreshToken,
      profile,
      done) => {
        User.findOne({ sso: profile.id })
          .then((user,err) => {
            if(user || err) {
              console.log('already have user');
              done(err, user);
            } else {
              let email;
              if(!profile.emails) {
                email = `${profile.id}@facebook.com`
              }
              else {
                email = profile.emails[0].value
              }
              new User({
                UserName: profile.displayName,
                sso: profile.id,
                FirstName: profile.name.givenName,
                LastName: profile.name.familyName,
                Email: email,
                Password: 'assanAhasas@21242323'
              }).save().then((user, err) => {
                done(err, user)
              })
            }
          })
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

