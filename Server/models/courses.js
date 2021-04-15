const mongoose = require('mongoose');

let CourseSchema = mongoose.Schema({
    _idAccount: {
        type: String,
        required: true
    },
    namecource: {
        type: String,
        required: true
    },
    codecourse: {
        type: String,
        required: true,
    },
    decryption: {
        type: String,
        required: true,
    },
    nameschool: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
},
{
    timestamps:true,
});

module.exports = UserSchema = mongoose.model('Courses', CourseSchema);