const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  customer_name: {
    type: String,
  },
  contact: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("Subs", itemSchema);
