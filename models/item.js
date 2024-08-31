const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item_name: {
    type: String,
  },
  item_code: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  unit_price: {
    type: Number,
  },
  description: {
    type: String,
  },
  exp_date: {
    type: Date,
  },
});

module.exports = mongoose.model("Item", itemSchema);
