const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

let otpStore = {}; // { phone: { otp, expires } }

// ================= SEND OTP =================
router.post("/send-otp", (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone is required" });
  }

  const otp = "123456"; // testing only

  otpStore[phone] = {
    otp,
    expires: Date.now() + 5 * 60 * 1000,
  };

  console.log(`OTP for ${phone}: ${otp}`);

  // ✅ SEND OTP BACK
  res.json({
    message: "OTP sent successfully",
    otp, // 👈 THIS FIXES undefined
  });
});

// ================= VERIFY OTP =================
router.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  // OTP validation (keep your existing checks)

  try {
    const now = new Date();

    const user = await User.findOneAndUpdate(
      { phone },
      {
        $setOnInsert: {
          phone,
          addresses: [],
          createdAt: now,
        },
        $set: {
          lastLogin: now,
        },
        $push: {
          logins: now,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
