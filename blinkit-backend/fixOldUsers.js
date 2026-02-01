require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User"); // adjust path

async function fixOldUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");

    const users = await User.find();
    let count = 0;

    for (let user of users) {
      let updated = false;
      if (!user.createdAt) {
        user.createdAt = new Date();
        updated = true;
      }
      if (!user.updatedAt) {
        user.updatedAt = user.createdAt;
        updated = true;
      }
      if (updated) {
        await user.save();
        count++;
      }
    }

    console.log(`Old users fixed: ${count}`);
    await mongoose.disconnect();
  } catch (err) {
    console.error("Error fixing old users:", err);
    await mongoose.disconnect();
  }
}

fixOldUsers();
