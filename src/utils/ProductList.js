import React from "react";
import { TitleCategory, TitleCard } from "@/components/UI/Titles";
import { ButtonSecondary } from "@/components/UI/ButtonSecondary";

export default function ProductList({ category, items }) {
  return (
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
  );
}
