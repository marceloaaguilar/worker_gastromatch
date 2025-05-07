"use client"

import { useState } from "react"
import Header from "../components/Header/Header"
import MessageSender from "../components/message-sender"
import MessageHistory from "../components/message-history"

// Exemplo de dados de usuário (normalmente viria de um contexto de autenticação)
const currentUser = {
  id: "user-123",
  name: "João Silva",
}

// Exemplo de dados de chef
const chefs = [
  { id: "chef-1", name: "Chef Ricardo Silva" },
  { id: "chef-2", name: "Chef Maria Santos" },
  { id: "chef-3", name: "Chef André Costa" },
]

export default function MessagePage() {
  const [selectedChef, setSelectedChef] = useState(chefs[0])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Mensagens</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <label htmlFor="chef-select" className="block text-sm font-medium text-gray-700 mb-1">
              Selecione um chef para conversar
            </label>
            <select
              id="chef-select"
              value={selectedChef.id}
              onChange={(e) => {
                const chef = chefs.find((c) => c.id === e.target.value)
                if (chef) setSelectedChef(chef)
              }}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-[#ea580c]"
            >
              {chefs.map((chef) => (
                <option key={chef.id} value={chef.id}>
                  {chef.name}
                </option>
              ))}
            </select>
          </div>

          <MessageHistory recipientId={selectedChef.id} currentUserId={currentUser.id} className="mb-6" />

          <MessageSender recipientId={selectedChef.id} recipientName={selectedChef.name} />
        </div>
      </main>
    </div>
  )
}
