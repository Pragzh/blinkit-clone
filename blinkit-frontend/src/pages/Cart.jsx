// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!user || !token) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 mb-4">Please login to place an order.</p>
        <Link
          to="/login"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Login
        </Link>
      </div>
    );
  }

  if (cart.length === 0) return <p className="p-4">Your cart is empty</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 py-3 border-b"
        >
          {/* ✅ PRODUCT IMAGE */}
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />

          {/* Product Info */}
          <div className="flex-1">
            <span className="block font-semibold">{item.name}</span>
            <span className="text-sm text-gray-500">₹{item.price}</span>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-2 py-1 border rounded"
            >
              −
            </button>

            <span className="font-semibold">{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="px-2 py-1 border rounded"
            >
              +
            </button>
          </div>

          {/* Price */}
          <span className="font-semibold w-20 text-right">
            ₹{item.price * item.quantity}
          </span>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <div className="flex justify-between font-bold my-4">
        <span>Total</span>
        <span>₹{totalPrice}</span>
      </div>

      {/* Checkout */}
      <button
        onClick={() => navigate("/checkout")}
        className="bg-green-600 text-white px-6 py-3 rounded w-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
