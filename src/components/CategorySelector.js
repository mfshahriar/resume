import React, { useState } from "react";

const CategorySelector = ({ onSelect, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const _onSelect = (category) => {
    setSelectedCategory(category);
    onSelect(category);
  };
  return (
    <div className="flex flex-col md:flex-row mx-auto select-none">
      <span
        onClick={() => _onSelect("ALL")}
        className={`${
          selectedCategory === "ALL" ? "text-blue-600" : "text-gray-900"
        } mx-auto md:mx-2 font-bold hover:text-blue-600 cursor-pointer select-none`}
      >
        ALL
      </span>
      {categories.map((category, i) => {
        return (
          <span
            key={i}
            onClick={() => _onSelect(category)}
            className={`${
              selectedCategory === category ? "text-blue-600" : "text-gray-900"
            } mx-auto md:mx-2 font-bold hover:text-blue-600 cursor-pointer select-none`}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
};

export default CategorySelector;
