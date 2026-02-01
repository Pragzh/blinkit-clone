const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Order = require("../models/Order");
const auth = require("../middleware/auth");

router.post("/checkout", auth, async (req, res) => {
  try {
    const userId = req.userId;
    const { cart, totalAmount, paymentId, address } = req.body;

    if (!cart || !totalAmount || !paymentId) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const validCartItems = cart.map((item) => ({
      productId: new mongoose.Types.ObjectId(item.productId),
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      
    }));

    const order = new Order({
      user: userId,
      cart: validCartItems,
      totalAmount,
      paymentId,
      address,
      status: "completed",
    });

    await order.save();
    res.json({ message: "Order placed successfully", orderId: order._id });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ message: "Failed to save order" });
  }
});

// GET logged-in user's orders
router.get("/my-orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

module.exports = router;
