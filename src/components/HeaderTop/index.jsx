import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HeaderTop() {
  return (
    <header className="bg-slate-500 p-4">
      <div className="container m-auto flex flex-col justify-center gap-4">
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
        <nav className="flex gap-8 justify-center">
          <Link href="produtos/">Produtos</Link>
          <Link href="galeria/">Galeria</Link>
          <Link href="produtos/">Contatos</Link>
        </nav>
      </div>
    </header>
  );
}
