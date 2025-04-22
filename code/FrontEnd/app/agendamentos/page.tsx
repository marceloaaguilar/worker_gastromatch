"use client"

import type React from "react"

import { useState } from "react"
import { Search, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react"
import Header from "@/components/header"

// Verificar se o export default está correto
export default function AgendamentoPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    telefone: "",
    chef: "",
    dataHorario: "",
    local: "",
    numConvidados: "",
    tipoRefeicao: "Jantar completo",
    restricoes: [] as string[],
    observacoes: "",
    metodoPagamento: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const restricoes = [...prev.restricoes]
      if (restricoes.includes(value)) {
        return { ...prev, restricoes: restricoes.filter((r) => r !== value) }
      } else {
        return { ...prev, restricoes: [...restricoes, value] }
      }
    })
  }

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-center mb-8">Solicitar Agendamento</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              1
            </div>
            <div className="text-sm text-center mt-2">
              <span className={step === 1 ? "text-primary font-medium" : "text-gray-500"}>Informações</span>
            </div>
          </div>

          <div className="w-24 h-1 bg-gray-200 mx-2">
            <div className="h-full bg-primary transition-all" style={{ width: step >= 2 ? "100%" : "0%" }}></div>
          </div>

          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 2 ? "bg-primary text-white" : step > 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              2
            </div>
            <div className="text-sm text-center mt-2">
              <span className={step === 2 ? "text-primary font-medium" : "text-gray-500"}>Detalhes</span>
            </div>
          </div>

          <div className="w-24 h-1 bg-gray-200 mx-2">
            <div className="h-full bg-primary transition-all" style={{ width: step >= 3 ? "100%" : "0%" }}></div>
          </div>

          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step === 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              3
            </div>
            <div className="text-sm text-center mt-2">
              <span className={step === 3 ? "text-primary font-medium" : "text-gray-500"}>Pagamento</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1: Informações */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Informações do Cliente</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Detalhes do Agendamento</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="chef" className="block text-sm font-medium text-gray-700 mb-1">
                      Selecionar Chef
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="chef"
                        name="chef"
                        placeholder="Buscar chef..."
                        value={formData.chef}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary pr-10"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dataHorario" className="block text-sm font-medium text-gray-700 mb-1">
                      Data e Horário
                    </label>
                    <input
                      type="datetime-local"
                      id="dataHorario"
                      name="dataHorario"
                      value={formData.dataHorario}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="local" className="block text-sm font-medium text-gray-700 mb-1">
                    Local do Serviço
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="local"
                      name="local"
                      placeholder="Endereço completo"
                      value={formData.local}
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <button type="button" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                      A combinar
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="numConvidados" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de Convidados
                    </label>
                    <input
                      type="number"
                      id="numConvidados"
                      name="numConvidados"
                      placeholder="Quantidade de pessoas"
                      value={formData.numConvidados}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipoRefeicao" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Refeição
                    </label>
                    <select
                      id="tipoRefeicao"
                      name="tipoRefeicao"
                      value={formData.tipoRefeicao}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary appearance-none bg-white"
                    >
                      <option value="Jantar completo">Jantar completo</option>
                      <option value="Almoço completo">Almoço completo</option>
                      <option value="Brunch">Brunch</option>
                      <option value="Coffee break">Coffee break</option>
                      <option value="Coquetel">Coquetel</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Restrições Alimentares</label>
                  <div className="flex flex-wrap gap-3">
                    {["Sem glúten", "Sem lactose", "Vegetariano", "Vegano"].map((restricao) => (
                      <label key={restricao} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={formData.restricoes.includes(restricao)}
                          onChange={() => handleCheckboxChange(restricao)}
                        />
                        <span
                          className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                            formData.restricoes.includes(restricao)
                              ? "bg-primary-100 text-primary-700 border border-primary-300"
                              : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                          }`}
                        >
                          {restricao}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-1">
                    Observações Adicionais
                  </label>
                  <textarea
                    id="observacoes"
                    name="observacoes"
                    rows={4}
                    placeholder="Descreva detalhes específicos do seu pedido..."
                    value={formData.observacoes}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Detalhes */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Detalhes do Agendamento</h2>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Chef selecionado</p>
                      <div className="flex items-center mt-1">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                        <div>
                          <p className="font-medium">Chef Ricardo Silva</p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 text-primary fill-primary"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">(126 avaliações)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Especialidades</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Italiana</span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                          Mediterrânea
                        </span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Gourmet</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Data e Horário</p>
                    <p className="font-medium mt-1">15/06/2023 às 19:30</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Local</p>
                    <p className="font-medium mt-1">Rua das Flores, 123 - Jardim Primavera</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Número de Convidados</p>
                    <p className="font-medium mt-1">10 pessoas</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Tipo de Refeição</p>
                    <p className="font-medium mt-1">Jantar completo</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500">Restrições Alimentares</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Sem glúten</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vegetariano</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500">Observações</p>
                  <p className="mt-1 text-gray-700">
                    Gostaria de um menu com opções vegetarianas e sem glúten. Preferência por pratos italianos
                    tradicionais.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Menu Sugerido</h2>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium">Entrada</h3>
                    <p className="text-gray-700 mt-1">Bruschetta de tomate e manjericão em pão sem glúten</p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium">Prato Principal</h3>
                    <p className="text-gray-700 mt-1">Risoto de cogumelos selvagens (opção vegetariana e sem glúten)</p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium">Sobremesa</h3>
                    <p className="text-gray-700 mt-1">
                      Panna cotta de baunilha com calda de frutas vermelhas (sem glúten)
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button className="flex items-center text-primary hover:text-primary-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Conversar com o chef para personalizar o menu
                  </button>
                </div>
              </div>
            </div>
          )}
{/* Step 3: Pagamento */}
{step === 3 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Preço e Pagamento</h2>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Valor por pessoa:</span>
                    <span className="font-medium">R$ 150,00</span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Número de convidados:</span>
                    <span className="font-medium">10</span>
                  </div>

                  <div className="border-t border-gray-200 my-4"></div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total estimado:</span>
                    <span className="text-xl font-bold text-primary">R$ 1.500,00</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Método de Pagamento</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label
                    className={`border rounded-lg p-4 flex items-center cursor-pointer ${
                      formData.metodoPagamento === "cartao" ? "border-primary bg-primary-50" : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="metodoPagamento"
                      value="cartao"
                      checked={formData.metodoPagamento === "cartao"}
                      onChange={() => setFormData((prev) => ({ ...prev, metodoPagamento: "cartao" }))}
                      className="hidden"
                    />
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <span>Cartão de Crédito</span>
                    </div>
                  </label>

                  <label
                    className={`border rounded-lg p-4 flex items-center cursor-pointer ${
                      formData.metodoPagamento === "pix" ? "border-primary bg-primary-50" : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="metodoPagamento"
                      value="pix"
                      checked={formData.metodoPagamento === "pix"}
                      onChange={() => setFormData((prev) => ({ ...prev, metodoPagamento: "pix" }))}
                      className="hidden"
                    />
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 4L4 8L12 12L20 8L12 4Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 16L12 20L20 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 12L12 16L20 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>PIX</span>
                    </div>
                  </label>
                </div>

                {formData.metodoPagamento === "cartao" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Data de Validade
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          placeholder="MM/AA"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        placeholder="Nome como está no cartão"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                )}

                {formData.metodoPagamento === "pix" && (
                  <div className="mt-6 p-6 border border-gray-200 rounded-lg text-center">
                    <p className="mb-4">Escaneie o QR Code para pagar:</p>
                    <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500">QR Code PIX</span>
                    </div>
                    <p className="text-sm text-gray-600">Ou copie o código PIX abaixo:</p>
                    <div className="bg-gray-100 p-2 rounded mt-2">
                      <code className="text-sm">
                        00020126580014br.gov.bcb.pix0136a629532e-7693-4846-b028-f142082d7b230217GastroMatch
                        Payment5204000053039865802BR5923GastroMatch Pagamentos6009SAO PAULO62070503***63041D3D
                      </code>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                <p className="text-sm text-primary-800">
                  <strong>Política de Cancelamento:</strong> Cancelamentos com até 48 horas de antecedência recebem
                  reembolso total. Cancelamentos com menos de 48 horas estão sujeitos a uma taxa de 30%.
                </p>
              </div>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={handleBack}
              className={`flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 ${
                step === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
              }`}
              disabled={step === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </button>

            <button
              type="button"
              onClick={step === 3 ? () => alert("Agendamento solicitado com sucesso!") : handleNext}
              className="flex items-center px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-700"
            >
              {step === 3 ? "Solicitar Agendamento" : "Continuar"}
              {step !== 3 && <ArrowRight className="w-4 h-4 ml-2" />}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

