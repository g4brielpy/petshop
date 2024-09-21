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
import { Paragraph } from "@/components/UI/Paragraph";
import { SpaceSection } from "@/components/UI/SpaceSection";
import { ButtonDefault } from "@/components/UI/ButtonDefault";
import { ButtonSecondary } from "@/components/UI/ButtonSecondary";

export default function Home() {
  return (
    <>
      <BannerHome>
        <div className="container mx-auto mb-10 font-bold flex flex-col text-white">
          <p>Bem Vindo ao PetShop</p>
          <div className="my-8 space-y-4 ">
            <TitlesBanner>Melhor Amigo</TitlesBanner>
            <SubTitlesBanner>
              Nós fornecemos os melhores <br /> produtos para animais
            </SubTitlesBanner>
          </div>
          <p>Economize 20% no seu primeiro pedido</p>
        </div>
        <div className="container mx-auto">
          <ButtonDefault href="/produtos">Ver Produtos</ButtonDefault>
        </div>
      </BannerHome>

      <main className="container mx-auto p-4">
        <SpaceSection />

        <section>
          <TitleSection>
            Bem-vindo ao Petshop{" "}
            <span className="text-verde2">Melhor Amigo!</span>
          </TitleSection>
          <div className="space-y-4">
            <Paragraph>
              No Petshop "Melhor Amigo", nós entendemos que seu animal de
              estimação é mais do que apenas um bichinho, é um membro especial
              da sua <strong className="text-verde2">família</strong>. Com isso
              em mente, estamos comprometidos em fornecer cuidados excepcionais
              e serviços de alta qualidade para garantir que seu melhor amigo
              tenha uma vida feliz e saudável.
            </Paragraph>
            <Paragraph>
              Com uma equipe dedicada e apaixonada por animais, nossos
              profissionais treinados estão prontos para oferecer os melhores
              cuidados para o seu pet. Desde{" "}
              <strong className="text-verde2">
                serviços de tosa profissional
              </strong>
              , onde deixaremos seu animalzinho com um visual impecável, até a{" "}
              <strong className="text-verde2">
                limpeza e higienização completa
              </strong>
              , proporcionamos um ambiente seguro e tranquilo para que seu amigo
              se sinta confortável durante todo o processo.
            </Paragraph>
            <Paragraph>
              Sabemos que a alimentação é fundamental para a saúde do seu pet,
              por isso oferecemos uma{" "}
              <strong className="text-verde2">
                ampla variedade de rações de alta qualidade
              </strong>{" "}
              e alimentos balanceados, adaptados às necessidades individuais de
              cada animal. Nossos especialistas estão disponíveis para fornecer
              orientação personalizada e ajudálo a escolher a melhor opção para
              o seu amiguinho.
            </Paragraph>
          </div>
        </section>

        <SpaceSection />

        <section>
          <TitleSection>
            Venha Conhecer Nossos <span className="text-verde2">Produtos</span>
          </TitleSection>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(products).map(([category, items]) => (
              <div key={category}>
                <TitleCategory>
                  {category[0].toUpperCase() + category.slice(1)}
                </TitleCategory>
                <div className="">
                  {
                    <div className="bg-white px-4 py-6 rounded-lg shadow-lg border">
                      <TitleCard>{items[0].title}</TitleCard>
                      <p className="mb-2">{items[0].description}</p>
                      <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
                        <p className="font-bold text-verde2">
                          R$ {items[0].price}
                        </p>
                        <ButtonSecondary href="/produtos">
                          Comprar
                        </ButtonSecondary>
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonDefault href="/produtos">Ver Mais Produtos</ButtonDefault>
          </div>
        </section>

        <SpaceSection />
      </main>
    </>
  );
}
