const db = require('../config/connection');
const cleanDB = require('./cleanDB');

const { Parent, Chore,  } = require('../models');

const parentSeeds = require('./parentSeeds.json');
const choreSeeds = require('./choreSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('Parent', 'parents');
    await cleanDB('Chore', 'chores');
    await Parent.create(parentSeeds);
    await Chore.create(choreSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});