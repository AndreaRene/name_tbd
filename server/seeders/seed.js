const db = require('../config/connection');
const cleanDB = require('./cleanDB');

const {
  Parent,
  Child,
  Chore,
  Reward,
  Consequence
} = require('../models');

const parentSeeds = require('./parentSeeds.json');
const childSeeds = require('./childSeeds.json');
const choreSeeds = require('./choreSeeds.json');
const rewardSeeds = require('./rewardSeeds.json');
const consdSeeds = require('./consSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('Consequence', 'concequences');
    await cleanDB('Reward', 'rewards');
    await cleanDB('Chore', 'chores');
    await cleanDB('Child', 'childs');
    await cleanDB('Parent', 'parents');

    await Consequence.create(consdSeeds);
    await Reward.create(rewardSeeds);
    await Chore.create(choreSeeds);
    await Child.create(childSeeds);
    await Parent.create(parentSeeds);

    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});