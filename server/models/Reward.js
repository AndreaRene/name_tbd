const { Schema, model } = require('mongoose');

const rewardSchema = new Schema({
    rewardTitle: {
        type: String,
        require: true,
        trim: true,
        minlength: 3,
        maxLength: 20,
        match: /[a-z]|[A-Z]|[0-9]/,
    },
    rewardText: {
        type: String,
        trim: true,
        maxlength: 200,
    },
    rewardCost: {
        type: Number,
        maxlength: 3,
        match: /[0-9]/
    },
    rewardCount: {
        type: Number,
    },
    rewardMaxCount: {
        type: Number,
        maxlength: 2,
        match: /[0-9]/
    }
});

const Reward = model('Reward', rewardSchema);

module.exports = Reward;