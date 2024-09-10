import { inter } from "@/lib/fonts";
import "@/styles/globals.css";

import { HeaderTop } from "@/components/HeaderTop";

export const metadata = {
  title: "PetShop - Melhor Amigo",
  description: "WebSite completo de uma página fictícia de PetShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <HeaderTop />
        {children}
      </body>
    </html>
  );
}
