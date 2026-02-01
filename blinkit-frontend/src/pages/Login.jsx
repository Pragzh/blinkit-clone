import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = send otp, 2 = verify otp
  const navigate = useNavigate();

  // 🔹 SEND OTP
  const sendOTP = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/send-otp",
        { phone }
      );

      console.log("OTP sent:", res.data);
      setStep(2);
      alert("OTP sent successfully");
    } catch (err) {
      console.error("Send OTP error:", err.response || err.message);
      alert("Failed to send OTP");
    }
  };

  // 🔹 VERIFY OTP
  const verifyOTP = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { phone, otp }
      );

      console.log("Login success:", res.data);

      // save user + token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    } catch (err) {
      console.error("Verify OTP error:", err.response || err.message);
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button
              onClick={sendOTP}
              className="bg-green-600 text-white w-full py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button
              onClick={verifyOTP}
              className="bg-blue-600 text-white w-full py-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
