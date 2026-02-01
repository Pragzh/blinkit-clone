import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import HorizontalScroll from "../components/HorizontalScroll";
import StickyCart from "../components/StickyCart"; // ✅ Import StickyCart
import categories from "../data/categories";
import products from "../data/products";
import { useCart } from "../context/CartContext";



const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 mt-6">
        {/* Categories */}
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Grocery & Essentials
        </h2>

        <HorizontalScroll>
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              name={cat.name}
              isSelected={selectedCategory === cat.name}
              onClick={() => setSelectedCategory(cat.name)}
            />
          ))}
        </HorizontalScroll>

        {/* Products */}
        {categories.map((cat) => {
          const catProducts = products.filter(
            (p) => p.category === cat.name
          );

          if (selectedCategory && selectedCategory !== cat.name) return null;
          if (catProducts.length === 0) return null;

          return (
            <div key={cat.id} className="mt-8">
              <h2 className="text-lg md:text-xl font-semibold mb-4">
                {cat.name}
              </h2>

              <HorizontalScroll>
                {catProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onAddToCart={addToCart} // ✅ Add to cart handler
                  />
                ))}
              </HorizontalScroll>
            </div>
          );
        })}
      </div>

      {/* 🔥 Sticky cart added */}
      <StickyCart />
    </>
  );
};

export default Home;
