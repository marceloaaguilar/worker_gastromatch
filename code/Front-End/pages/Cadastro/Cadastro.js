"use client"
import Link from "next/link"
import { useState } from "react"
import { Camera, Plus } from "lucide-react"

export default function CadastroPage() {
  const [userType, setUserType] = useState(null)
  const [especialidades, setEspecialidades] = useState(["Italiana", "Japonesa", "Vegana"])

  return (
    <div className="min-h-screen bg-[#fff8f0]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white md:px-12">
        <Link href="/" className="text-xl font-bold text-[#ea580c]">
          GastroMatch
        </Link>
        <Link href="/login" className="text-sm text-gray-600 hover:text-[#ea580c]">
          Já tem uma conta? Entrar
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Criar sua conta</h1>

          {/* User Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              className={`p-6 border rounded-lg flex flex-col items-center justify-center text-center h-32 transition-colors ${
                userType === "usuario" ? "border-[#ea580c] bg-orange-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setUserType("usuario")}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="font-medium">Usuário</h3>
              <p className="text-sm text-gray-500">Procuro um chef para meu evento</p>
            </button>

            <button
              className={`p-6 border rounded-lg flex flex-col items-center justify-center text-center h-32 transition-colors ${
                userType === "chef" ? "border-[#ea580c] bg-orange-50" : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setUserType("chef")}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
                  <line x1="6" x2="18" y1="17" y2="17"></line>
                </svg>
              </div>
              <h3 className="font-medium">Chef de Cozinha</h3>
              <p className="text-sm text-gray-500">Quero oferecer meus serviços</p>
            </button>
          </div>

          {/* Registration Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                />
              </div>

              <div>
                <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço (opcional)
                </label>
                <input
                  type="text"
                  id="endereco"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                />
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                />
              </div>

              <div>
                <label htmlFor="confirmar-senha" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmar-senha"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Foto de Perfil (opcional)</label>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <Camera className="w-6 h-6 text-gray-400" />
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                >
                  Escolher foto
                </button>
              </div>
            </div>

            {/* Chef Information - Only shown if Chef is selected */}
            {userType === "chef" && (
              <div className="space-y-6 pt-4 border-t">
                <h2 className="text-lg font-medium">Informações do Chef</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Especialidades</label>
                  <div className="flex flex-wrap gap-2">
                    {especialidades.map((esp, index) => (
                      <span key={index} className="px-3 py-1 bg-orange-100 text-[#ea580c] rounded-full text-sm">
                        {esp}
                      </span>
                    ))}
                    <button
                      type="button"
                      className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                    >
                      <Plus className="w-3 h-3 mr-1" /> Adicionar
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição profissional
                  </label>
                  <textarea
                    id="descricao"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfólio de pratos</label>
                  <div className="border border-dashed border-gray-300 rounded-md w-32 h-32 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">
                      Preço por hora
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">R$</span>
                      </div>
                      <input
                        type="text"
                        id="preco"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="disponibilidade" className="block text-sm font-medium text-gray-700 mb-1">
                      Disponibilidade
                    </label>
                    <select
                      id="disponibilidade"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c] appearance-none bg-white"
                    >
                      <option>Todos os dias</option>
                      <option>Dias de semana</option>
                      <option>Finais de semana</option>
                      <option>Personalizado</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-[#ea580c] text-white rounded-md hover:bg-[#d45209] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea580c]"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
