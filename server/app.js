const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const bodyParser = require('body-parser');
const port = 3001;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rgMarket');
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  const filter = req.query.filter;

  if (filter) {
    const filterArr = filter.split(' ');
    const filteredProducts = products.filter((item) => filterArr.includes(item.category));

    res.status(200).json(filteredProducts);
  } else {
    res.status(200).json(products);
  }
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.status(200).json(product);
});

app.delete('/products/:id/delete', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);

  res.status(200).json({ message: 'Delete Success' });
});

app.post('/search', async (req, res) => {
  const { query } = req.body;
  const products = await Product.find({});
  const searchedProduct = products.filter((product) => {
    const regex = new RegExp(query, 'gi');
    return product.title.match(regex);
  });

  res.status(200).json([...searchedProduct]);
});

app.post('/new', async (req, res) => {
  const product = new Product(req.body);
  await product.save();

  res.status(200).json({ message: 'Create Success' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
