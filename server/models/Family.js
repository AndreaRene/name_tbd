const { Schema, model } = require('mongoose');

const familySchema = new Schema({
    familyName: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 20,
        trim: true,
        match: /[a-z]|[A-Z]/
    },
    familyPasscode: {
        type: String,
        require: true,  
    },
    familyParents: [{
        type: Schema.Types.ObjectId,
        ref: 'Parent'
    }],
    familyChildren: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],
    familyChores: [{
        type: Schema.Types.ObjectId,
        ref: 'Chore'
    }],
    familyRewards: [{
        type: Schema.Types.ObjectId,
        ref: 'Reward'
    }],
    familyCons: [{
        type: Schema.Types.ObjectId,
        ref: 'Consequence'
    }],
});

const Family = model('Family', familySchema);

module.exports = Family;