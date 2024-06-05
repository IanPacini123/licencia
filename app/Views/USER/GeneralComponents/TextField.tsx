import React from "react";

const TextField: React.FC<{ label: string, placeholder: string, type?: string}> = ({ label, placeholder, type = "text"}) => {
    return (
      <div className="flex flex-col mb-4 w-full">
        <label className="text-xl text-gray-700">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
    );
};
  
export default TextField;
