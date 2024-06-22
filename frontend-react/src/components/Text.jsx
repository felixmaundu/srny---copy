import React from 'react';

const Text = ({ children, className, onClick }) => {
  return (
    <p className={`text-gray-700 ${className}`} onClick={onClick}>
      {children}
    </p>
  );
};

export default Text;
