const { Schema, model } = require('mongoose');

const consequenceSchema = new Schema({
    consTitle: {
        type: String,
        required: true,
        maxlength: 20,
        trim: true,
    },
    consText: {
        type: String,
        maxlength: 200,
        trim: true,
    },
    consCount: {
        type: Number,
        },
    consCost: {
        type: Number,
        maxlength: 3,
        match: /[0-9]/
    },
    consIsSpent: {
        type: Boolean,
        require: true,
        default: false,
    },
});

const Consequence = model('Consequence', consequenceSchema);

module.exports = Consequence;