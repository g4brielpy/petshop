import React from "react";

export function Title({ children }) {
  return (
    <h2 className="font-sans font-bold mb-6 text-center text-2xl md:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}
