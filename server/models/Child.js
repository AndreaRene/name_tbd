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
    childSibling: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],
    childParent: [{
        type: Schema.Types.ObjectId,
        ref: 'Parent'
    }],
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

const Child = model('Child', childSchema);

module.exports = Child;