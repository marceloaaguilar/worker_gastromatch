"use client"

import { useEffect, useState } from "react"
import type { MessageResponse } from "../services/message-api"
import { useMessageApi } from "../hooks/use-message-api"

export default function MessageHistory() {
  const [messages, setMessages] = useState<MessageResponse[]>([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const { loading, error, getMessageHistory } = useMessageApi()
  const ITEMS_PER_PAGE = 10

  useEffect(() => {
    loadMessages()
  }, [page])

  const loadMessages = async () => {
    try {
      const history = await getMessageHistory(ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
      setMessages((prev) => (page === 0 ? history : [...prev, ...history]))
      setHasMore(history.length === ITEMS_PER_PAGE)
    } catch (error) {
      console.error("Erro ao carregar histórico de mensagens:", error)
    }
  }

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "SENT":
        return "bg-blue-100 text-blue-800"
      case "DELIVERED":
        return "bg-green-100 text-green-800"
      case "FAILED":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Histórico de Mensagens</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          <p>{error}</p>
        </div>
      )}

      {messages.length === 0 && !loading && !error ? (
        <div className="text-center py-8 text-gray-500">
          <p>Nenhuma mensagem encontrada.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">ID: {message.id}</p>
                  <p className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleString()}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                  {message.status}
                </span>
              </div>
            </div>
          ))}

          {hasMore && (
            <div className="text-center pt-4">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
              >
                {loading ? "Carregando..." : "Carregar Mais"}
              </button>
            </div>
          )}
        </div>
      )}

      {loading && messages.length === 0 && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  )
}
