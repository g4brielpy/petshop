import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export function HeaderTop() {
  return (
    <header className="bg-branco2 p-4 lg:py-2">
      <div
        className="
      container m-auto 
      flex flex-col items-center justify-center gap-4
      lg:flex-row lg:justify-evenly
      "
      >
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
        <nav
          className="
          text-verde2 font-semibold
          flex gap-8 justify-center
          md:text-lg md:font-bold
          "
        >
          <Link href="produtos/">Produtos</Link>
          <Link href="galeria/">Galeria</Link>
          <Link href="produtos/">Contatos</Link>
        </nav>
        <div className="hidden lg:flex gap-4">
          <Link href="#" className="cursor-pointer">
            <FaUser size={20} />
          </Link>
          <Link href="#" className="cursor-pointer">
            <FaCartPlus size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
