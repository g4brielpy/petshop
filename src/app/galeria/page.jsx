import Image from "next/image";

import { BannerHome } from "@/components/BannerHome";
import { SpaceSection } from "@/components/UI/SpaceSection";
import { Paragraph } from "@/components/UI/Paragraph";
import {
  TitleSection,
  TitlesBanner,
  SubTitlesBanner,
} from "@/components/UI/Titles";

const galleryImages = [
  "/galeria/definir-publico-alvo-veterinario-capa-blogpost.jpg",
  "/galeria/melhor.jpg",
  "/galeria/pet-shop-um-negocio-de-sucesso.jpg",
  "/galeria/pet-1.jpg",
  "/galeria/pet-2.jpg",
  "/galeria/pet-3.jpg",
  "/galeria/pet-4.jpg",
  "/galeria/pet-5.jpg",
];

export default function galeriaFotos() {
  return (
    <>
      <BannerHome>
        <div className="container mx-auto mb-10 font-bold flex flex-col text-white">
          <p>Bem Vindo ao PetShop</p>
          <div className="my-8 space-y-4 ">
            <TitlesBanner>Melhor Amigo</TitlesBanner>
            <SubTitlesBanner>
              Confira momentos especiais dos <br />
              nossos clientes de quatro patas!
            </SubTitlesBanner>
          </div>
          <p>Economize 20% no seu primeiro pedido</p>
        </div>
        <div className="container mx-auto"></div>
      </BannerHome>

      <main className="container mx-auto p-4">
        <SpaceSection />

        <section>
          <TitleSection>
            Nossa <span className="text-verde2">Galeria de Fotos</span>
          </TitleSection>
          <Paragraph>
            Nossa galeria de fotos é o reflexo do nosso amor e cuidado pelos
            animais. Lá, você poderá ver alguns dos adoráveis clientes que já
            passaram pelo nosso petshop. É um verdadeiro prazer atender a cada
            um deles e contribuir para o seu bem-estar e felicidade.
          </Paragraph>

          <SpaceSection />

          <div
            className="
              grid grid-cols-1 gap-6
              md:grid-cols-2 lg:grid-cols-3
            "
          >
            {galleryImages.map((image, index) => (
              <div key={index} className="w-full group">
                <Image
                  src={image}
                  alt={`Galeria Pet ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-md transform transition-transform duration-300 group-hover:scale-105 h-96 w-full"
                />
              </div>
            ))}
          </div>
        </section>

        <SpaceSection />
      </main>
    </>
  );
}
