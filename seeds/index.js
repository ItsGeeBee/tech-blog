const seedPosts = require('./post-seeds.js');
const sequelize = require('../config/config.js');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPosts();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  process.exit(0);
};
seedAll();