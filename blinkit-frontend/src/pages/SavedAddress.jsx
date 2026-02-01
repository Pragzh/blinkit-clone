import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

const SavedAddress = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: "",
    house: "",
    area: "",
    city: "",
    pincode: "",
  });
  const [loading, setLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!token || !user) navigate("/login");
  }, [token, user, navigate]);

  // Fetch saved addresses safely
  const fetchAddresses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/addresses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const safeAddresses = Array.isArray(res.data) ? res.data.filter(a => a) : [];
      setAddresses(safeAddresses);

      // Save to localStorage for UI-only operations
      localStorage.setItem("savedAddressesUI", JSON.stringify(safeAddresses));
    } catch (err) {
      console.error(err);
      alert("Error fetching addresses");
    }
  };

  useEffect(() => {
    if (token) fetchAddresses();
  }, [token]);

  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Save new address
  const handleSave = async () => {
    const { name, house, area, city, pincode } = newAddress;

    if (!name || !house || !area || !city || !pincode) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${BASE_URL}/api/addresses/save`,
        newAddress,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data && res.data.address) {
        const updatedAddresses = [...addresses, res.data.address];
        setAddresses(updatedAddresses);

        // Update localStorage for UI
        localStorage.setItem("savedAddressesUI", JSON.stringify(updatedAddresses));
      }

      setNewAddress({ name: "", house: "", area: "", city: "", pincode: "" });
      alert("Address saved successfully!");
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Error saving address");
      setLoading(false);
    }
  };

  // Remove address only from UI (no backend call)
  const handleRemoveFromUI = (id) => {
    const updatedAddresses = addresses.filter(a => a._id !== id);
    setAddresses(updatedAddresses);

    // Update localStorage to reflect UI removal
    localStorage.setItem("savedAddressesUI", JSON.stringify(updatedAddresses));

    alert("Address removed from UI");
  };

  if (!token || !user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Saved Addresses</h1>

      {/* Address Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          name="name"
          value={newAddress.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-3 rounded"
        />
        <input
          name="house"
          value={newAddress.house}
          onChange={handleChange}
          placeholder="House / Flat No."
          className="border p-3 rounded"
        />
        <input
          name="area"
          value={newAddress.area}
          onChange={handleChange}
          placeholder="Area / Street"
          className="border p-3 rounded"
        />
        <input
          name="city"
          value={newAddress.city}
          onChange={handleChange}
          placeholder="City"
          className="border p-3 rounded"
        />
        <input
          name="pincode"
          value={newAddress.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          className="border p-3 rounded"
        />
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="mb-6 bg-green-600 text-white px-6 py-3 rounded font-semibold"
      >
        {loading ? "Saving..." : "Save Address"}
      </button>

      {/* Saved Addresses List */}
      <h2 className="text-xl font-semibold mb-4">Your Addresses:</h2>
      {addresses.length === 0 ? (
        <p>No addresses saved yet.</p>
      ) : (
        <ul className="space-y-3">
          {addresses.map((a) =>
            a ? (
              <li key={a._id} className="border p-3 rounded flex justify-between items-center">
                <div>
                  <p><strong>{a.name}</strong></p>
                  <p>{a.house}, {a.area}, {a.city} - {a.pincode}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromUI(a._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
};

export default SavedAddress;
