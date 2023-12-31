const { Schema, model } = require('mongoose');
// const PhoneNumber = require('google-libphonenumber');

const parentSchema = new Schema({
    parentUsername: {
        type: String,
        // require: true,
        unique: true,
        minlength: 2,
        maxlength: 20,
        trim: true,
        match: /[a-z]|[A-Z]|[0-9]/
    },
    parentEmail: {
        type: String,
        require: true,
        lowercase: true,
        trim: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    parentPhone: {
        type: String,
        unique: true,
        trim: true, //TODO: trim true or disallow spaces as user types?
        // TODO: figure out google-libphone
    },
    parentPassword: {
        type: String,
        require: true,
        //TODO: required/disallowed characters
    },
    family: {
        type: Schema.Types.ObjectId,
        ref: 'Family'
    }

});

const Parent = model('Parent', parentSchema);

module.exports = Parent;