import React from 'react';

const Button = ({ children, type = 'button', className }) => {
  return (
    <button
      type={type}
      className={`py-2 px-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
