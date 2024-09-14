import React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/cachorro-icon.png"
        alt="Cachorro Icon"
        width="100"
        height="100"
        className="object-cover w-16"
      />
      <p className="text-2xl font-bold font-sans">Melhor Amigo</p>
    </div>
  );
}
