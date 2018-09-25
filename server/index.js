const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // create model class before trying to use it
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// tell express to use cookies
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // cookie expires after 30 days 
        keys: [keys.cookieKey] // encryption key
    })
);
app.use(passport.initialize());
app.use(passport.session());

// require function and immediately call it with app param
require('./routes/authRoutes')(app); 

const PORT = process.env.PORT || 5000;
app.listen(PORT);