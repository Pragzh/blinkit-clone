// src/pages/OrderSuccess.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://blinkit-clone-production.up.railway.app";

const OrderSuccess = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();
  const { orderId } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    const fetchOrder = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/orders/${orderId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrder(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch order details");
        navigate("/");
      }
    };

    if (orderId) fetchOrder();
  }, [orderId, navigate, token]);

  if (!order) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Order Placed Successfully
        </h1>

        <p className="text-sm text-gray-500 mb-4">Thank you for your purchase!</p>

        <div className="space-y-2 text-sm">
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Payment ID:</strong> {order.paymentId}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total Amount:</strong> ₹{order.total}</p>
          <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
        </div>

        <hr className="my-4" />

        <h2 className="font-semibold mb-2">Items Purchased</h2>
        <div className="space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-1 text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
