import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, onAddToCart }) => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="min-w-[160px] bg-white border rounded-lg p-3 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="h-30 w-full object-contain mb-2"
      />

      <h3 className="text-sm font-medium">{product.name}</h3>
      <p className="text-xs text-gray-500">₹{product.price}</p>

      <div className="mt-2">
        {cartItem ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-gray-200 px-2 rounded"
            >
              −
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="bg-gray-200 px-2 rounded"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-green-500 text-white py-1 rounded"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
