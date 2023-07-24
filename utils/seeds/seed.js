const sequelize = require('../../config/index');
const { Post, User } = require('../../models');

const userSeedData = require('./userSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();
