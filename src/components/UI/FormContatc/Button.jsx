import React from "react";

export function Button({ children }) {
  return (
    <button
      className="
        bg-verde2 text-white 
        px-10 py-4 rounded-lg
        lg:w-48 lg:text-lg xl:w-52 xl:text-xl
        hover:opacity-85 
      "
    >
      {children}
    </button>
  );
}