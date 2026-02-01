import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Use state for user
  const [user, setUser] = useState(null);

  // Load user from localStorage when component mounts
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart"); // optional
    setUser(null); // ✅ Update state to null
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-green-600">
          blinkit
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Cart */}
        <Link
          to="/cart"
          className="relative bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Login / Account Dropdown */}
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition flex items-center gap-1"
            >
              {user.phone || "Account"} ▼
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
                <Link
                  to="/my-orders"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Orders
                </Link>
                <Link
                  to="/saved-address"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Saved Address
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/otp-login")}
            className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
