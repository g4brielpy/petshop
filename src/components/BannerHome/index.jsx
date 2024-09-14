import React from "react";
import Link from "next/link";

export function BannerHome({ children }) {
  return (
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
      <div>{children}</div>
    </section>
  );
}
