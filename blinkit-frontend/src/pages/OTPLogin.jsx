// src/pages/OTPLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTPLogin = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: phone, Step 2: OTP
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Send OTP
  const sendOTP = async () => {
    if (!phone) return setMessage("Please enter phone number");
    setLoading(true);
    try {
      const res = await axios.post("https://blinkit-clone-production.up.railway.app/api/auth/send-otp", { phone });
      setMessage(res.data.message);
      alert(`Your OTP is: ${res.data.otp}`); // For dev/testing
      setStep(2);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Failed to send OTP");
    }
    setLoading(false);
  };

  // Verify OTP
  const verifyOTP = async () => {
    if (!otp) return setMessage("Please enter OTP");
    setLoading(true);
    try {
      const res = await axios.post("https://blinkit-clone-production.up.railway.app/api/auth/send-otp", { phone, otp });
      const { token, user } = res.data;

      // Save token & user info
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setMessage("Login successful!");
      navigate("/"); // redirect to home
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login with Phone</h2>

      {step === 1 && (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={sendOTP}
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 transition"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={verifyOTP}
            disabled={loading}
            className="bg-green-500 text-white py-2 px-3 rounded hover:bg-green-600 transition"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      )}

      {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
    </div>
  );
};

export default OTPLogin;
