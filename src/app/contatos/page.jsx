import React from "react";

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
              Os melhores produtos para <br /> Seu animalzinho de estimação
            </SubTitlesBanner>
          </div>
          <p>Economize 20% no seu primeiro pedido</p>
        </div>
      </BannerHome>
    </>
  );
}
