import React from "react";

export default function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 visited:text-purple-600"
    >
      {children}
    </a>
  );
}
