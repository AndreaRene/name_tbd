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
    family: {
        type: Schema.Types.ObjectId,
        ref: 'Family'
    },
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
    }]
});

const Child = model('Child', childSchema);

module.exports = Child;