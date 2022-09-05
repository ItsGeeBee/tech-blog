const { Post } = require('../models');
const productData = [
  {
    title: 'Learning to Code',
    body: "Day by day, week by week.. it still makes no sense"
  },
];
const seedPosts = () => Post.bulkCreate(productData);
module.exports = seedPosts;