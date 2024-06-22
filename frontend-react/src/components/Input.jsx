import React from 'react';

const Input = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
    />
  );
};

export default Input;
