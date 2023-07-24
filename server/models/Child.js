const { Schema, model } = require('mongoose');


const childSchema = new Schema({


    });

const Child = model('Child', childSchema);

module.exports = Child;