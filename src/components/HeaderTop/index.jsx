import React from "react";
import Link from "next/link";

import { Logo } from "../UI/Logo";
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
        <Logo />
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
