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
    required: true,
    maxlength: 200,
    trim: true,
  },
 
});

const Chore = model('Chore', choreSchema);

module.exports = Chore;