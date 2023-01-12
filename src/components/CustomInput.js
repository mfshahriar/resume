import React from "react";

const CustomInput = ({ label, placeholder }) => {
  return (
    <div>
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 
    "
        />
      </label>
    </div>
  );
};

export default CustomInput;
