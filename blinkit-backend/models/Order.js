const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  cart: [
    {
      _id: false, // ✅ remove subdocument _id
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],

  totalAmount: { type: Number, required: true },
  paymentId: String,

  address: {
    name: String,
    house: String,
    area: String,
    city: String,
    pincode: String,
  },

  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
