import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/orders/my-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load orders");
      }
    };

    fetchOrders();
  }, [token]);

  if (orders.length === 0) {
    return <p className="p-6 text-center">No orders yet</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {orders.map(order => (
        <div key={order._id} className="border rounded p-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">
              Order ID: {order._id}
            </span>
            <span className="text-green-600 font-semibold">
              {order.status}
            </span>
          </div>

          {order.cart.map((item, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>₹{order.totalAmount}</span>
          </div>

          <div className="text-xs text-gray-500 mt-2">
            Delivered to: {order.address.house}, {order.address.area}, {order.address.city}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
