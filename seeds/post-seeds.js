const { Post } = require('../models');
const productData = [
  {
    title: 'Learning to Code',
    body: 'Day by day, week by week.. it still makes no sense',
    createdAt:'5/9/2022',
    userId: 1,
    User:'Grace'
  },
];
const seedPosts = () => Post.bulkCreate(productData);
module.exports = seedPosts;