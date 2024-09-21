import React from "react";
import Link from "next/link";
import products from "@/data/products.json";

import { BannerHome } from "@/components/BannerHome";
import {
  TitlesBanner,
  SubTitlesBanner,
  TitleSection,
  TitleCategory,
  TitleCard,
} from "@/components/UI/Titles";
import { ButtonSecondary } from "@/components/UI/ButtonSecondary";
import { SpaceSection } from "@/components/UI/SpaceSection";
import { Paragraph } from "@/components/UI/Paragraph";

export default function produtos() {
  return (
    <>
      <BannerHome>
        <div className="container mx-auto mb-10 font-bold flex flex-col text-white">
          <p>Bem Vindo ao PetShop</p>
          <div className="my-8 space-y-4 ">
            <TitlesBanner>Melhor Amigo</TitlesBanner>
            <SubTitlesBanner>
              Os melhores produtos para <br /> Seu animalzinho de estimação
            </SubTitlesBanner>
          </div>
          <p>Economize 20% no seu primeiro pedido</p>
        </div>
      </BannerHome>
      <main className="container mx-auto p-4">
        <SpaceSection />

        <section>
          <TitleSection>
            Nossos <span className="text-verde2">Produtos</span>
          </TitleSection>
          <div className="space-y-4">
            <Paragraph>
              Bem-vindo à nossa{" "}
              <span className="text-verde2 font-bold">seção de produtos</span>,
              onde você encontra tudo o que seu pet precisa para se manter
              saudável, feliz e bem cuidado. Dividimos nossos itens em{" "}
              <span className="text-verde2 font-bold">
                três categorias principais
              </span>
              , para facilitar a sua navegação e garantir que você encontre
              exatamente o que está procurando.
            </Paragraph>
            <Paragraph>
              No Petshop{" "}
              <span className="text-verde2 font-bold">Melhor Amigo</span>,
              também acreditamos na importância da socialização e diversão para
              o bem-estar dos animais. Por isso, oferecemos momentos especiais
              de brincadeiras e interação em nosso espaço dedicado, garantindo
              que seu pet se divirta e faça novos amigos. Além disso, temos uma
              ampla variedade de brinquedos e acessórios para enriquecer a vida
              do seu animalzinho.
            </Paragraph>
          </div>

          <div className="space-y-8 mt-16">
            {Object.entries(products).map(([category, items]) => (
              <div key={category}>
                <TitleCategory>
                  {category[0].toUpperCase() + category.slice(1)}
                </TitleCategory>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white px-4 py-6 rounded-lg shadow-lg border"
                    >
                      <TitleCard>{item.title}</TitleCard>
                      <p className="mb-2">{item.description}</p>
                      <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
                        <p className="font-bold text-verde2">R$ {item.price}</p>
                        <ButtonSecondary href="#">Comprar</ButtonSecondary>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <SpaceSection />
      </main>
    </>
  );
}
