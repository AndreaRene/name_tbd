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
    family: {
        type: Schema.Types.ObjectId,
        ref: 'Family'
    },
    child: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }],
    chore: [{
        type: Schema.Types.ObjectId,
        ref: 'Chore'
    }],
});

const Consequence = model('Consequence', consequenceSchema);

module.exports = Consequence;