"use client"

import { useState, type FormEvent } from "react"
import { useMessageApi } from "../hooks/use-message-api"
import { Send } from "lucide-react"

interface MessageSenderProps {
  recipientId: string
  recipientName: string
  onMessageSent?: () => void
  className?: string
}

export default function MessageSender({
  recipientId,
  recipientName,
  onMessageSent,
  className = "",
}: MessageSenderProps) {
  const [message, setMessage] = useState("")
  const { sendMessage, sending, error } = useMessageApi({ recipientId })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    const success = await sendMessage(message)

    if (success) {
      setMessage("")
      if (onMessageSent) onMessageSent()
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="text-sm font-medium text-gray-700 mb-1">Enviar mensagem para {recipientName}</div>

        <div className="flex items-center space-x-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 min-h-[80px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-[#ea580c] resize-none"
            disabled={sending}
          />
        </div>

        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}

        <button
          type="submit"
          disabled={sending || !message.trim()}
          className="flex items-center justify-center px-4 py-2 bg-[#ea580c] text-white rounded-md hover:bg-[#c2410c] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? (
            <span>Enviando...</span>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              <span>Enviar</span>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
