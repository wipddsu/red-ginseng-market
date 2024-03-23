const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: String,
  descsription: String,
  price: Number,
  brand: String,
  category: String,
  image: String,
});

module.exports = mongoose.model('Product', ProductSchema);
