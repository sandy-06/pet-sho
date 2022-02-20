const db = require('../config/connection');
const { Product } = require('../models');
const productSeeds = require('./productSeed.js');
const adminSeeds = require('./productSeed');
const { Users } = require('../models');

db.once('open', async () => {
  await Product.deleteMany({});
  await Product.create(productSeeds);

  await Users.deleteMany({});
  await Users.create(adminSeeds);

  console.log('all done!');
  process.exit(0);
});