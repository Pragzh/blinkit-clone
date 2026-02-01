import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const StickyCart = () => {
  const { cart } = useCart(); // 🔑 must use useCart hook

  if (!cart || cart.length === 0) return null; // Hide if cart empty

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t p-4 flex justify-between items-center md:hidden z-50">
      <div>
        <span className="font-semibold">{totalItems} items</span> |{" "}
        <span className="font-bold">₹{totalPrice}</span>
      </div>

      <Link
        to="/cart"
        className="bg-green-500 text-white px-4 py-2 rounded font-semibold"
      >
        Checkout
      </Link>
    </div>
  );
};

export default StickyCart;
