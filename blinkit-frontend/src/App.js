import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import SavedAddress from "./pages/SavedAddress";
import Login from "./pages/Login";
import OTPLogin from "./pages/OTPLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Added */}
          <Route path="/order-success/:orderId" element={<OrderSuccess />} />

          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/saved-address" element={<SavedAddress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-login" element={<OTPLogin />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
