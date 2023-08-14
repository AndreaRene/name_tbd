const { Schema, model } = require('mongoose')

const childrenchema = new Schema({
    childUsername: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        match: /[a-z]|[A-Z]/,
    },
    childFamily: {
        type: Schema.Types.ObjectId,
        ref: 'Family'
    },
    childChore: [{
        type: Schema.Types.ObjectId,
        ref: 'Chore'
    }],
    childReward: [{
        type: Schema.Types.ObjectId,
        ref: 'Reward'
    }],
    childCons: [{
        type: Schema.Types.ObjectId,
        ref: 'Consequence'
    }],
});

const Child = model('Child', childrenchema);

module.exports = Child;