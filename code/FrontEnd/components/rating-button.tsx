"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import RatingModal from "./rating-modal"

interface RatingButtonProps {
  chefId: string
  chefName: string
  chefImage: string
  onSubmitRating?: (data: { rating: number; comment: string }) => Promise<void>
}

export default function RatingButton({ chefId, chefName, chefImage, onSubmitRating }: RatingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmitRating = async (data: { rating: number; comment: string }) => {
    if (onSubmitRating) {
      await onSubmitRating(data)
    } else {
      // Implementação padrão se nenhum manipulador for fornecido
      console.log("Avaliação enviada:", { chefId, ...data })
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-colors"
        aria-label="Avaliar chef"
      >
        <Star className="w-6 h-6" />
      </button>

      <RatingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        chefName={chefName}
        chefImage={chefImage}
        onSubmit={handleSubmitRating}
      />
    </>
  )
}
