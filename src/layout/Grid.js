import React from "react";

export default function Grid({ children, className }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 text-center ${className}`}
    >
      {children}
    </div>
  );
}
