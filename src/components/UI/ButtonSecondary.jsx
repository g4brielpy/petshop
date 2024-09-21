import React from "react";
import Link from "next/link";

export function ButtonSecondary({ children, href = "" }) {
  return (
    <Link
      href={href}
      className="
        font-bold bg-verde2 text-white 
        px-4 py-2 rounded-lg
        hover:opacity-85 hover:underline  
      "
    >
      {children}
    </Link>
  );
}
