const fs = require('node:fs/promises');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/products', async (req, res) => {
  const fileContent = await fs.readFile('./data/products.json');

  const productsData = JSON.parse(fileContent);

  res.status(200).json({ products: productsData });
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const fileContent = await fs.readFile('./data/products.json');

  const productsData = JSON.parse(fileContent);
  const selectedProduct = productsData.filter((product) => product.id === Number(id));

  res.status(200).json(...selectedProduct);
});

app.post('/search', async (req, res) => {
  const { query } = req.body;
  const fileContent = await fs.readFile('./data/products.json');

  const productsData = JSON.parse(fileContent);
  const searchedProduct = productsData.filter((product) => {
    const regex = new RegExp(query, 'gi');
    return product.title.match(regex);
  });

  res.status(200).json([...searchedProduct]);
});

app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`);
});
