const { Schema, model } = require('mongoose')

const childSchema = new Schema({
    childUsername: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        match: /[a-z]|[A-Z]/,
    },
    familyId: {
        type: String
    },
    chores: [{
        type: Schema.Types.ObjectId,
        ref: 'Chore'
    }],
    rewards: [{
        type: Schema.Types.ObjectId,
        ref: 'Reward'
    }],
    consequences: [{
        type: Schema.Types.ObjectId,
        ref: 'Consequence'
    }]
});

const Child = model('Child', childSchema);

module.exports = Child;