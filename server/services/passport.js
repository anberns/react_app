const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// pull users model class from mongoose
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    // user.id is _id of document, use for cookie 
    // so multiple auth providers can be used
    done(null, user.id); 
});

// use _id from cookie to find document
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            //promise for async database communication
            .then((existingUser) => {
                if (existingUser) {
                    // already have a document
                    done(null, existingUser); // null is err param
                }
                else {
                    // create and save new document
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user)); // user is returned promise
                }
            })
    }
));