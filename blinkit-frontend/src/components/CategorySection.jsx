import React from "react";
import ProductCard from "./ProductCard";

const CategorySection = ({ categoryName, products, onAddToCart }) => {
  return (
    <div className="my-6">
      {/* Category Name */}
      <h2 className="text-lg font-bold mb-2">{categoryName}</h2>

      {/* Horizontally Scrollable Products */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
