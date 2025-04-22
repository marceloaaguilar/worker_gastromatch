"use client"

import { useState } from "react"
import Header from "@/components/header"
import RatingModal from "@/components/rating-modal"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Star } from "lucide-react"

export default function AvaliacaoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedChef, setSelectedChef] = useState({
    id: "1",
    name: "Chef Ricardo Silva",
    image: "/images/Chef Ricardo.jpeg",
    specialty: "Culinária Italiana e Mediterrânea",
    rating: 4.9,
  })

  const handleOpenModal = (chef: any) => {
    setSelectedChef(chef)
    setIsModalOpen(true)
  }

  const handleSubmitRating = async (data: { rating: number; comment: string }) => {
   
    console.log("Avaliação enviada:", { chefId: selectedChef.id, ...data })

    
    await new Promise((resolve) => setTimeout(resolve, 1000))

   
    alert(`Avaliação enviada com sucesso! Você deu ${data.rating} estrelas para ${selectedChef.name}.`)
  }

  const pastBookings = [
    {
      id: "1",
      chef: {
        id: "1",
        name: "Chef Ricardo Silva",
        image: "/images/Chef Ricardo.jpeg",
        specialty: "Culinária Italiana e Mediterrânea",
        rating: 4.9,
      },
      date: "15/04/2023",
      time: "19:30",
      location: "Rua das Flores, 123 - Jardim Primavera",
      menu: "Jantar Italiano",
      isRated: false,
    },
    {
      id: "2",
      chef: {
        id: "2",
        name: "Chef Maria Santos",
        image: "/images/Marina.jpeg",
        specialty: "Gastronomia Contemporânea",
        rating: 4.7,
      },
      date: "28/02/2023",
      time: "20:00",
      location: "Av. Paulista, 1000 - Bela Vista",
      menu: "Menu Degustação",
      isRated: true,
    },
    {
      id: "3",
      chef: {
        id: "3",
        name: "Chef André Costa",
        image: "/images/Chef André Costa.jpeg",
        specialty: "Culinária Francesa e Patisserie",
        rating: 4.9,
      },
      date: "10/01/2023",
      time: "12:30",
      location: "Rua Augusta, 500 - Consolação",
      menu: "Almoço Executivo",
      isRated: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-8">Meus Agendamentos Passados</h1>

        <div className="space-y-6">
          {pastBookings.map((booking) => (
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
                      <p className="text-gray-600 text-sm">{booking.chef.specialty}</p>
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
                    <span className="text-sm text-gray-500 italic">Avaliado</span>
                  ) : (
                    <button
                      onClick={() => handleOpenModal(booking.chef)}
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                    >
                      Avaliar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link para voltar */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-primary-600 hover:text-primary-700">
            Voltar para a página inicial
          </Link>
        </div>
      </main>

      {/* Modal de Avaliação */}
      <RatingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        chefName={selectedChef.name}
        chefImage={selectedChef.image}
        onSubmit={handleSubmitRating}
      />
    </div>
  )
}
