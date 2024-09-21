import React from "react";
import Link from "next/link";

export function ButtonDefault({ children, href = "" }) {
  return (
    <Link
      href={href}
      className="
        text-white bg-verde1
        px-4 py-2 md:px-5 md:py-3
        rounded-md shadow-md
        hover:opacity-85 hover:underline
      "
    >
      {children}
    </Link>
  );
}
