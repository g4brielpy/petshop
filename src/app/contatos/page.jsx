import React from "react";
import Image from "next/image";

import { BannerHome } from "@/components/BannerHome";
import {
  TitlesBanner,
  SubTitlesBanner,
  TitleSection,
  TitleCategory,
  TitleCard,
} from "@/components/UI/Titles";
import { SpaceSection } from "@/components/UI/SpaceSection";
import { Paragraph } from "@/components/UI/Paragraph";

export default function contatos() {
  return (
    <>
      <BannerHome>
        <div className="container mx-auto mb-10 font-bold flex flex-col text-white">
          <p>Bem Vindo ao PetShop</p>
          <div className="my-8 space-y-4 ">
            <TitlesBanner>Melhor Amigo</TitlesBanner>
            <SubTitlesBanner>
              Entre em contato conosco para <br /> agendar um serviço hoje
              mesmo!
            </SubTitlesBanner>
          </div>
          <p>Economize 20% no seu primeiro pedido</p>
        </div>
      </BannerHome>

      <main className="container mx-auto p-4">
        <SpaceSection />

        <section>
          <TitleSection>
            Entre em <span className="text-verde2">contato</span> conosco
          </TitleSection>
          <div className="space-y-4">
            <Paragraph>
              Estamos ansiosos para conhecê-lo e ao seu melhor amigo! Visite-nos
              no Petshop "Melhor Amigo" e descubra a diferença que fazemos na
              vida dos animais de estimação.
            </Paragraph>
            <Paragraph>
              Entre em contato conosco por telefone, e-mail ou através do nosso{" "}
              <span className="text-verde2 font-bold">
                formulário de contato
              </span>{" "}
              no nosso site. Seu pet merece o melhor, e nós estamos aqui para
              fornecer exatamente isso. Confie no Petshop "Melhor Amigo" para
              cuidar do seu melhor amigo como se fosse nosso próprio.
            </Paragraph>
          </div>
        </section>

        <SpaceSection />
        <Image
          src="/logo-pet.png"
          alt="Pata de Cachorro"
          width="80"
          height="80"
          className="mx-auto"
        />
        <div className="mt-16">
          <form action="#" method="post" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ex.: Gabriel Iuri"
                className="outline-none border border-solid border-verde1 focus:border-verde2 p-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex.: contato@gmail.com"
                className="outline-none border border-solid border-verde1 focus:border-verde2 p-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tel">Telefone</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Ex.: 31 9 9999-9999"
                className="outline-none border border-solid border-verde1 focus:border-verde2 p-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea name="mensagem" id="mensagem"></textarea>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
