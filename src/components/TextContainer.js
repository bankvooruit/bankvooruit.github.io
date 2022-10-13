import React from "react";

export default function TextContainer({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-12 my-8 ${className}`}
    >
      {children}
    </div>
  );
}
