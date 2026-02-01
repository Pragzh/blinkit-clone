const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth"); // JWT auth middleware

// ---------------------------
// GET USER PROFILE
// ---------------------------
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-__v");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------------------
// ADD / SAVE ADDRESS
// ---------------------------
router.post("/address", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    user.addresses.push(req.body); // body = { street, city, pincode, etc }
    await user.save();
    res.json(user.addresses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not save address" });
  }
});

// ---------------------------
// GET ALL ADDRESSES
// ---------------------------
router.get("/addresses", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("addresses");
    res.json(user.addresses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not fetch addresses" });
  }
});

// ---------------------------
// UPDATE PROFILE
// ---------------------------
router.put("/profile", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: req.body }, // body can contain name, email, etc.
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Profile update failed" });
  }
});

module.exports = router;
