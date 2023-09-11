const { Schema, model } = require('mongoose');

const choreSchema = new Schema({
  family: {
    type: Schema.Types.ObjectId,
    ref: 'Family'
  },
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
  recurring: {
    type: Boolean,
    default: false,
  },
 
  children: [{
    child: {
      type: Schema.Types.ObjectId,
      ref: 'Child'
    },
     recurringFrequency: {
    type: String, 
    },
    recurringStartDate: {
      type: String,
    },
    recurringEndDate: {
      type: String,
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
    reward: {
      type: Schema.Types.ObjectId,
      ref: 'Reward'
    },
    consequence: {
      type: Schema.Types.ObjectId,
      ref: 'Consequence'
    },

  }],
});

const Chore = model('Chore', choreSchema);

module.exports = Chore;
