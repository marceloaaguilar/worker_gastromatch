"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Star, Search, Filter, ChevronRight, Plus } from "lucide-react"
import Header from "@/components/header"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"agendamentos" | "chefs" | "historico">("agendamentos")

  
  const upcomingBookings = [
    {
      id: "1",
      chef: {
        name: "Chef Ricardo Silva",
        image: "/images/chef-ricardo.jpg",
        rating: 4.9,
      },
      date: "15/06/2023",
      time: "19:30",
      location: "Rua das Flores, 123 - Jardim Primavera",
      guests: 10,
      menu: "Jantar Italiano",
      status: "Confirmado",
    },
    {
      id: "2",
      chef: {
        name: "Chef Maria Santos",
        image: "/images/chef-maria.jpg",
        rating: 4.7,
      },
      date: "28/07/2023",
      time: "20:00",
      location: "Av. Paulista, 1000 - Bela Vista",
      guests: 6,
      menu: "Menu Degustação",
      status: "Pendente",
    },
  ]

  const recommendedChefs = [
    {
      id: "1",
      name: "Chef Ricardo Silva",
      image: "/images/chef-ricardo.jpg",
      specialty: "Culinária Italiana e Mediterrânea",
      rating: 4.9,
      reviews: 126,
    },
    {
      id: "2",
      name: "Chef Maria Santos",
      image: "/images/chef-maria.jpg",
      specialty: "Gastronomia Contemporânea",
      rating: 4.7,
      reviews: 95,
    },
    {
      id: "3",
      name: "Chef André Costa",
      image: "/images/chef-andre.jpg",
      specialty: "Culinária Francesa e Patisserie",
      rating: 4.9,
      reviews: 158,
    },
  ]

 
  const bookingHistory = [
    {
      id: "1",
      chef: {
        name: "Chef Ricardo Silva",
        image: "/images/chef ricardo.jpg",
        rating: 4.9,
      },
      date: "15/04/2023",
      time: "19:30",
      location: "Rua das Flores, 123 - Jardim Primavera",
      menu: "Jantar Italiano",
      isRated: true,
      userRating: 5,
    },
    {
      id: "2",
      chef: {
        name: "Chef Maria Santos",
        image: "/images/Chefe Maria Santos.jpeg",
        rating: 4.7,
      },
      date: "28/02/2023",
      time: "20:00",
      location: "Av. Paulista, 1000 - Bela Vista",
      menu: "Menu Degustação",
      isRated: false,
    },
    {
      id: "3",
      chef: {
        name: "Chef André Costa",
        image: "/images/Chef André Costa.jpeg",
        rating: 4.9,
      },
      date: "10/01/2023",
      time: "12:30",
      location: "Rua Augusta, 500 - Consolação",
      menu: "Almoço Executivo",
      isRated: true,
      userRating: 4,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-8">Olá, Maria!</h1>

        {/* Abas de navegação */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("agendamentos")}
            className={`py-3 px-6 font-medium ${
              activeTab === "agendamentos"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Agendamentos
          </button>
          <button
            onClick={() => setActiveTab("chefs")}
            className={`py-3 px-6 font-medium ${
              activeTab === "chefs"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Chefs
          </button>
          <button
            onClick={() => setActiveTab("historico")}
            className={`py-3 px-6 font-medium ${
              activeTab === "historico"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Histórico
          </button>
        </div>

        {/* Conteúdo da aba Agendamentos */}
        {activeTab === "agendamentos" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Seus Agendamentos</h2>
              <Link
                href="/agendamentos"
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </Link>
            </div>

            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Chef Info */}
                        <div className="flex items-center flex-1">
                          <div className="w-16 h-16 relative mr-4">
                            <Image
                              src={booking.chef.image || "/placeholder.svg"}
                              alt={booking.chef.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{booking.chef.name}</h3>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                              <span className="text-sm">{booking.chef.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* Booking Details */}
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{booking.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{booking.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{booking.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">
                            Menu: <span className="font-medium">{booking.menu}</span>
                          </p>
                          <p className="text-sm text-gray-600">
                            Convidados: <span className="font-medium">{booking.guests} pessoas</span>
                          </p>
                        </div>

                        <div className="flex items-center">
                          <span
                            className={`px-2 py-1 rounded-full text-xs mr-3 ${
                              booking.status === "Confirmado"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status}
                          </span>
                          <Link
                            href={`/agendamentos/${booking.id}`}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            Ver detalhes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Nenhum agendamento encontrado</h3>
                <p className="text-gray-500 mb-4">Você ainda não tem agendamentos futuros.</p>
                <Link
                  href="/agendamentos"
                  className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Agendar um Chef
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Conteúdo da aba Chefs */}
        {activeTab === "chefs" && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Chefs Recomendados</h2>

              <div className="flex gap-2">
                <div className="relative flex-1 md:w-64">
                  <input
                    type="text"
                    placeholder="Buscar chefs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedChefs.map((chef) => (
                <div key={chef.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <Image src={chef.image || "/placeholder.svg"} alt={chef.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{chef.name}</h3>
                      <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                        <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                        <span className="font-medium">{chef.rating}</span>
                        <span className="text-xs text-gray-500 ml-1">({chef.reviews})</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{chef.specialty}</p>

                    <Link
                      href={`/chefs/${chef.id}`}
                      className="block w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 text-center transition-colors"
                    >
                      Ver perfil
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/chefs" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                Ver todos os chefs
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        )}

        {/* Conteúdo da aba Histórico */}
        {activeTab === "historico" && (
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Histórico de Agendamentos</h2>

            <div className="space-y-6">
              {bookingHistory.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Chef Info */}
                      <div className="flex items-center flex-1">
                        <div className="w-16 h-16 relative mr-4">
                          <Image
                            src={booking.chef.image || "/placeholder.svg"}
                            alt={booking.chef.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{booking.chef.name}</h3>
                          <div className="flex items-center mt-1">
                            <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                            <span className="text-sm">{booking.chef.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Booking Details */}
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{booking.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{booking.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{booking.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">
                          Menu: <span className="font-medium">{booking.menu}</span>
                        </p>
                      </div>

                      {booking.isRated ? (
                        <div className="flex items-center text-gray-500">
                          <span className="text-sm mr-2">Sua avaliação:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < (booking.userRating || 0) ? "fill-primary-600 text-primary-600" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                          Avaliar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/avaliacao" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                Ver histórico completo
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
