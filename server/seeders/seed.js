const db = require('../config/connection');
const cleanDB = require('./cleanDB');

const {
  Family,
  Parent,
  Child,
  Chore,
  Reward,
  Consequence,
} = require('../models');

const FamilySeeds = require('./familySeeds.json');
const parentSeeds = require('./parentSeeds.json');
const childrenSeeds = require('./childSeeds.json');
const choreSeeds = require('./choreSeeds.json');
const rewardSeeds = require('./rewardSeeds.json');
const consdSeeds = require('./consSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('Family', 'families');
    await cleanDB('Consequence', 'consequences');
    await cleanDB('Reward', 'rewards');
    await cleanDB('Chore', 'chores');
    await cleanDB('Child', 'children');
    await cleanDB('Parent', 'parents');

    await Family.create(FamilySeeds);
    await Consequence.create(consdSeeds);
    await Reward.create(rewardSeeds);
    await Chore.create(choreSeeds);
    await Child.create(childrenSeeds);
    await Parent.create(parentSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});