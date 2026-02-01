// src/pages/Checkout.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://blinkit-clone-production.up.railway.app";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    const savedAddressesUI =
      JSON.parse(localStorage.getItem("savedAddressesUI")) || [];
    setAddresses(savedAddressesUI);
    if (savedAddressesUI.length > 0) {
      setSelectedAddress(savedAddressesUI[0]);
    }
  }, []);

  if (!token || !user) return <p className="p-4">Please login first</p>;
  if (!cart || cart.length === 0) return <p className="p-4">Your cart is empty</p>;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }

    setLoading(true);
    try {
      const paymentRes = await axios.post(
        `${BASE_URL}/api/payment/create-order`,
        { amount: totalPrice },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const orderData = paymentRes.data;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Blinkit Clone",
        description: "Order Payment",

        prefill: {
   
       // Optional: prefill email
    contact: user?.phone || "",  // ✅ This will prefill mobile number
  },

        handler: async function (response) {
          const saveRes = await axios.post(
            `${BASE_URL}/api/orders/checkout`,
            {
              cart,
              totalAmount: totalPrice,
              paymentId: response.razorpay_payment_id,
              address: selectedAddress,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          clearCart();
          navigate(`/order-success/${saveRes.data.orderId}`);
        },

        modal: { ondismiss: () => alert("Payment cancelled") },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Address */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Select Delivery Address</h3>
        <select
          className="border p-2 rounded w-full"
          value={selectedAddress?._id || ""}
          onChange={(e) =>
            setSelectedAddress(addresses.find(a => a._id === e.target.value))
          }
        >
          {addresses.map((a) => (
            <option key={a._id} value={a._id}>
              {a.name}, {a.house}, {a.area}, {a.city} - {a.pincode}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ ORDER SUMMARY WITH IMAGE */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Order Summary</h3>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>
            </div>

            <span className="font-semibold">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

        <div className="flex justify-between font-bold mt-3">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;
