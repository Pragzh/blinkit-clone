import React, { useRef } from "react";

const HorizontalScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-gray-100 transition"
      >
        &#8249;
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 px-6 scroll-smooth scrollbar-hide"
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-gray-100 transition"
      >
        &#8250;
      </button>
    </div>
  );
};

export default HorizontalScroll;
