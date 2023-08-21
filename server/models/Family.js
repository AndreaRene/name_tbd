const { Schema, model } = require('mongoose');

const familySchema = new Schema({
    familyName: {
        type: String,
        // require: true,
        minlength: 5,
        maxlength: 20,
        trim: true,
        match: /[a-z]|[A-Z]/
    },
    familyPasscode: {
        type: String,
        // require: true,  
    },
    parentJoinCode: {
        type: String
    },
    childJoinCode: {
        type: String
    },
    parent: [{
        type: Schema.Types.ObjectId,
        ref: 'Parent'
    }],
    child: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],
    chore: [{
        type: Schema.Types.ObjectId,
        ref: 'Chore'
    }],
    reward: [{
        type: Schema.Types.ObjectId,
        ref: 'Reward'
    }],
    consequence: [{
        type: Schema.Types.ObjectId,
        ref: 'Consequence'
    }],
});

const Family = model('Family', familySchema);

module.exports = Family;