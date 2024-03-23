const mongoose = require('mongoose');
const products = require('./products');
const Product = require('../models/product');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rgMarket');
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const seedDB = async () => {
  await Product.deleteMany({});
  for (const p of products) {
    const product = new Product({
      title: p.title,
      description: p.description,
      price: p.price,
      brand: p.brand,
      category: p.category,
      image: p.image,
    });
    await product.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close;
});
