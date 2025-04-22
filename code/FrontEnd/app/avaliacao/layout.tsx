import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu Histórico | GastroMatch",
  description: "Veja seu histórico de agendamentos e avalie suas experiências gastronômicas",
}

export default function AvaliacaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}