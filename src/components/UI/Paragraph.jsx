import React from "react";

export function Paragraph({ children }) {
  return <p className="text-justify md:text-lg lg:text-xl">{children}</p>;
}
