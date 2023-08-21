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
  choreDueDate: {
    type: String,
  },
  choreCompletedDate: [{
    type: String,
  }],
  chorePoints: {
    type: Number,
  },
  family: {
    type: Schema.Types.ObjectId,
    ref: 'Family'
  },
  child: [{
    type: Schema.Types.ObjectId,
    ref: 'Child'
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

const Chore = model('Chore', choreSchema);

module.exports = Chore;