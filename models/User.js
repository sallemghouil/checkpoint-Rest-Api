const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: { type: String, uppercase: true, trim: true, required: true },
    email: 'String',
    adresse: 'String'
    });


module.exports = User = mongoose.model('user', userSchema);