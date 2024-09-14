import React from "react";
import Link from "next/link";

export function ProductCard({
  title = "",
  description = "",
  price = "",
  category = "",
}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href="#">{price}</Link>
      <small>{category}</small>
    </div>
  );
}
