import React from "react";

export function TitlesBanner({ children }) {
  return (
    <h1 className="font-bold font-sans text-4xl md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
}

export function SubTitlesBanner({ children }) {
  return (
    <h2 className="font-bold font-sans text-3xl md:text-4xl lg:text-5xl">
      {children}
    </h2>
  );
}

export function TitleSection({ children }) {
  return (
    <h2 className="font-sans font-bold mb-6 text-center text-2xl md:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

export function TitleFooter4({ children }) {
  return (
    <h4 className="font-semibold md:font-bold font-sans text-lg md:text-xl lg:text-2xl">
      {children}
    </h4>
  );
}
