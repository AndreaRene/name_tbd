const { Schema, model } = require('mongoose');

const choreSchema = new Schema({
  choreTitle: {
    type: String,
    required: true,
    maxlength: 20,
    trim: true,
  },
  choreText: {
    type: String,
    maxlength: 200,
    trim: true,
  },
  choreDueDate: [{
    type: Date,
  }],
  choreCompletedDate: [{
    type: Date,
  }],
  rewards: [{
    type: Schema.Types.ObjectId,
    ref: 'Reward'
  }],
  chorePoints: {
    type: Number,
  },
  consequences: [{
    type: Schema.Types.ObjectId,
    ref: 'Consequence'
  }]
});

const Chore = model('Chore', choreSchema);

module.exports = Chore;