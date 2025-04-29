import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | GastroMatch",
  description: "Gerencie seus agendamentos, encontre chefs e veja seu histórico no GastroMatch",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
