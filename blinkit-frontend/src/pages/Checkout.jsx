import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const address = JSON.parse(localStorage.getItem("address"));
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {
      const res = await axios.post("/api/orders", {
        userId: user._id,
        items: cartItems,
        address,
        totalAmount,
        paymentId: "COD", // or razorpay payment id
      });

      // ✅ IMPORTANT FIX
      const createdOrder = res.data;

      navigate(`/order-success/${createdOrder._id}`);
    } catch (error) {
      console.error("Order placement failed", error);
      alert("Order failed. Please try again.");
    }
  };

  return (
    <button
      onClick={placeOrder}
      className="w-full bg-green-600 text-white py-2 rounded"
    >
      Place Order
    </button>
  );
};

export default Checkout;
