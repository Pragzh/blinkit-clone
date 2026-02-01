require("dotenv").config();   // 👈 MUST BE FIRST LINE

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();



app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

app.use("/api/auth", require("./routes/authRoutes"));
const addressRoutes = require("./routes/addressRoutes");
app.use("/api/addresses", addressRoutes);
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);
const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payment", paymentRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

