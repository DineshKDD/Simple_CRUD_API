const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const ProudctSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    Timestamp: true,
  }
);

const Product_Schema = mongoose.model("Prouduct", ProudctSchema);
module.exports = Product_Schema;
