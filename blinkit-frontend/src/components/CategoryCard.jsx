import React from "react";

const CategoryCard = ({ name, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`min-w-[140px] p-4 rounded-lg text-center flex-shrink-0 cursor-pointer transition
        ${isSelected ? "bg-green-500 text-white" : "bg-gray-100 text-gray-800"}
      `}
    >
      {name}
    </div>
  );
};

export default CategoryCard;
