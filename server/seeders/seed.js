const db = require('../config/connection');
const cleanDB = require('./cleanDB');

const { Parent, Child, Chore,  } = require('../models');

const parentSeeds = require('./parentSeeds.json');
const childSeeds = require('./childSeeds.json');
const choreSeeds = require('./choreSeeds.json');

db.once('open', async () => {
  try {

    await cleanDB('Parent', 'parents');
    await cleanDB('Child', 'childs');
    await cleanDB('Chore', 'chores');

    await Parent.create(parentSeeds);
    await Child.create(childSeeds);
    await Chore.create(choreSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});