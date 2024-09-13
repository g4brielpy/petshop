import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="
        bg-verde2
        bg-[url('/racao-quadrada.png')] bg-no-repeat bg-right

        bg-[length:300px] sm:bg-[length:400px] md:bg-[length:500px] 
        lg:bg-[length:600px] xl:bg-[length:700px] 2xl:bg-contain

        h-[600px] sm:h-[700px] md:h-screen p-4
        flex flex-col justify-center
        "
      >
        <div>
          <div className="container mx-auto mb-10 font-bold flex flex-col text-white">
            <p>Bem Vindo ao PetShop</p>
            <div className="my-8 space-y-4 font-bold font-sans">
              <h1 className="text-4xl md:text-5xl lg:text-6xl ">
                Melhor Amigo
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Nós fornecemos os melhores <br /> produtos para animais
              </h2>
            </div>
            <p>Economize 20% no seu primeiro pedido</p>
          </div>
          <div className="container mx-auto">
            <Link
              href="/produtos"
              className=" 
                text-white bg-verde1 
                px-4 py-2 md:px-5 md:py-3 
                rounded-md shadow-md
                hover:opacity-85 hover:underline
              "
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>

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
          </div>
        </section>
      </main>
    </>
  );
}
