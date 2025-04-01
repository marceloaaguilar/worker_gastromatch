import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GastroMatch - Conectando Chefs e Experiências Gastronômicas",
  description: "Encontre os melhores chefs para criar experiências gastronômicas únicas",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
