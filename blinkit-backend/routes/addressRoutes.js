const express = require("express");
const router = express.Router();
const Address = require("../models/Address");
const auth = require("../middleware/auth"); // your JWT middleware

// Save new address
router.post("/save", auth, async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware
    const { name, phone, house, area, city, pincode } = req.body;

    // Create new address document
    const newAddress = new Address({
      user: userId,
      name,
      house,
      area,
      city,
      pincode,
    });

    await newAddress.save(); // <-- saves in addresses collection

    res.json({ message: "Address saved", address: newAddress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all addresses for logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.userId });
    res.json(addresses || []); // always return array
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
