import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo } from "../UI/Logo";
import { TitleFooter4 } from "../UI/Titles";
import { ContactCard } from "../UI/ContactCard";

export function FooterPet() {
  return (
    <footer className="bg-verde4 pt-4">
      <Link href="/">
        <Logo />
      </Link>
      <div className="container mx-auto my-10 px-4 ">
        <div className="flex flex-wrap flex-col sm:flex-row items-center gap-4 ">
          <div className="w-20 h-20 hidden md:flex">
            <Image
              src="/logo-pet.png"
              alt="Pata de cachorro"
              width="80"
              height="80"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 w-full">
            <ContactCard>
              <TitleFooter4>Contato</TitleFooter4>
              <ul className="mt-4 md:text-lg lg:text-xl">
                <li>petshop@melhoramigo.com</li>
                <li>(31) 9 9999-9999</li>
              </ul>
            </ContactCard>
          </div>
          <div className="flex-1 w-full">
            <ContactCard>
              <TitleFooter4>Horários</TitleFooter4>
              <ul className="mt-4 md:text-lg lg:text-xl">
                <li>ABERTO TODOS OS DIAS</li>
                <li>9:00 às 17:00</li>
              </ul>
            </ContactCard>
          </div>
        </div>
      </div>
      <div className="bg-verde2 text-white text-center p-3">
        <p>
          &copy; PetShop Melhor Amigo 2024 - Desenvolvido por{" "}
          <Link
            href="https://github.com/g4brielpy"
            target="_blank"
            className="font-semibold hover:underline"
          >
            Gabriel Iuri
          </Link>
        </p>
      </div>
    </footer>
  );
}
