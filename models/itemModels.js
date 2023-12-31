const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required.'],
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
  },
  image: {
    type: String,
    required: [true, 'Image is required.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
