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
    // in order to use relative path, add proxy:true
    callbackURL: '/auth/google/callback',
    proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
            if (existingUser) {
                return done(null, existingUser); // null is err param
            }

            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
    }
));