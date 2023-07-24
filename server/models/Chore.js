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
  choreIsMultiple: {
    type: Boolean,
  },
  choreDueDate: [{
    type: Date,
  }],
  choreDueTime: [{
    type: Date,
  }],
  choreAmount: {
    type: Number,
  },
  choreIsComplete: {
    type: Boolean,
  },
  choreCompleteDates: [{
    type: Date,
  }],
  choreReward: [{
    type: Schema.Types.ObjectId,
    ref: 'Reward'
  }],
  ChorePoints: {
    type: Number,
  },
  choreCons: [{
    type: Schema.Types.ObjectId,
    ref: 'Consequence'
  }]
});

const Chore = model('Chore', choreSchema);

module.exports = Chore;