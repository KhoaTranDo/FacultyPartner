const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tenbaikiemtra: {
        type: String,
        required: true
    },
},
{
    timestamps:true,
});

module.exports = UserSchema = mongoose.model('UserProfile', UserSchema);