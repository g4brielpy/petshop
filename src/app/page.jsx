import Link from "next/link";
import { BannerHome } from "@/components/BannerHome";

export default function Home() {
  return (
    <>
      <BannerHome />
      <main className="container mx-auto p-4">
        <section>
          <h2 className="font-sans font-bold mb-6 text-center text-2xl md:text-3xl lg:text-4xl">
            Bem-vindo ao Petshop{" "}
            <span className="text-verde2">Melhor Amigo!</span>
          </h2>
          <div className="space-y-4 text-justify md:text-lg lg:text-xl">
            <p>
              No Petshop "Melhor Amigo", nós entendemos que seu animal de
              estimação é mais do que apenas um bichinho, é um membro especial
              da sua <strong className="text-verde2">família</strong>. Com isso
              em mente, estamos comprometidos em fornecer cuidados excepcionais
              e serviços de alta qualidade para garantir que seu melhor amigo
              tenha uma vida feliz e saudável.
            </p>
            <p>
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
            </p>
            <p>
              Sabemos que a alimentação é fundamental para a saúde do seu pet,
              por isso oferecemos uma{" "}
              <strong className="text-verde2">
                ampla variedade de rações de alta qualidade
              </strong>{" "}
              e alimentos balanceados, adaptados às necessidades individuais de
              cada animal. Nossos especialistas estão disponíveis para fornecer
              orientação personalizada e ajudálo a escolher a melhor opção para
              o seu amiguinho.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
