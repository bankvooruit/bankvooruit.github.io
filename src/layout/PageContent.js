import React from "react";

export default function PageContent({ children }) {
  return (
    <div className="container relative z-10 flex items-center mx-auto px-6 md:px-24 xl:px-64 py-32 xl:py-40">
      {children}
    </div>
  );
}
