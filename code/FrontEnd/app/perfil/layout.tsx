import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu Perfil | GastroMatch",
  description: "Gerencie suas informações pessoais e preferências no GastroMatch",
}

export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
