import React from "react";

export default function BackgroundImage({ image, color, children }) {
  return (
    <div
      className={`bg-fixed bg-${color} bg-center bg-cover bg-repeat-y bg-center h-100 min-h-screen`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="dark:backdrop-brightness-50 h-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}
