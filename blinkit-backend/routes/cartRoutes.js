const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// GET cart items for logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user._id }).populate("product");
    res.json(cartItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ADD item to cart
router.post("/", auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const newItem = new Cart({
      user: req.user._id,
      product: productId,
      quantity,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE quantity
router.put("/:id", auth, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem || cartItem.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Item not found" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();
    res.json(cartItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE item
router.delete("/:id", auth, async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem || cartItem.user.toString() !== req.user._id.toString()) {
      return res.status(404).json({ message: "Item not found" });
    }

    await cartItem.remove();
    res.json({ message: "Item removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
