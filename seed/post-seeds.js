const { Post } = require('../models');
const productData = [
  {
    title: 'Plain T-Shirt',
    body: "hellooooo"
  },
];
const seedPosts = () => Post.bulkCreate(productData);
module.exports = seedPosts;