const mongoose =require('mongoose');
const { Schema } = mongoose; // take Schema property and assign to var mongoose

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);