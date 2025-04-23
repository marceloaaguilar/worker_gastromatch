"use client";

import { ArrowLeft, Send, User, ChefHat } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/header";

type User = {
  id: string;
  name: string;
  type: "chef" | "user";
  avatar?: string;
};

type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
};

// Dados estáticos simulando o que virá da API
const staticData = {
  currentUser: {
    id: "user-1",
    name: "Você",
    type: "user" as const,
  },
  otherParty: {
    id: "chef-1",
    name: "Chef",
    type: "chef" as const,
    avatar: "/code/FrontEnd/public/images/Chef Ricardo.jpeg", 
  },
  initialMessages: [] as Message[],
};

export default function ChatPage() {
  const [chatData] = useState(staticData);
  const [messages, setMessages] = useState<Message[]>(chatData.initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [hasSentFirstMessage, setHasSentFirstMessage] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: chatData.currentUser.id,
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");

    if (!hasSentFirstMessage) {
      setHasSentFirstMessage(true);
      
      setTimeout(() => {
        const replyMsg: Message = {
          id: (Date.now() + 1).toString(),
          senderId: chatData.otherParty.id,
          text: `Olá! Obrigado por sua mensagem. Estarei te respondendo em breve.`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, replyMsg]);
      }, 1500);
    }
  };

  const isCurrentUser = (senderId: string) => {
    return senderId === chatData.currentUser.id;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <Link
            href="/chefs"
            className="flex items-center text-primary-600 hover:text-primary-800"
          >
            <ArrowLeft className="mr-2" size={20} />
            Voltar
          </Link>
          <div className="flex items-center">
            <div className="bg-primary-100 p-2 rounded-full mr-3">
              {chatData.otherParty.type === "chef" ? (
                <ChefHat className="text-primary-600" size={24} />
              ) : (
                <User className="text-primary-600" size={24} />
              )}
            </div>
            <div>
              <h2 className="font-bold text-lg">{chatData.otherParty.name}</h2>
              <p className="text-sm text-gray-500">
                {messages.length > 0 ? "Online" : "Conectando..."}
              </p>
            </div>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Message Area */}
        <div className="space-y-4 mb-6 h-[calc(100vh-260px)] overflow-y-auto pb-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ChefHat size={48} className="mb-4 opacity-30" />
              <p>Envie sua primeira mensagem ao chef</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  isCurrentUser(message.senderId)
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                    isCurrentUser(message.senderId)
                      ? "bg-primary-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {!isCurrentUser(message.senderId) ? (
                      chatData.otherParty.type === "chef" ? (
                        <ChefHat className="mr-2" size={16} />
                      ) : (
                        <User className="mr-2" size={16} />
                      )
                    ) : null}
                    <span className="text-xs font-medium">
                      {isCurrentUser(message.senderId)
                        ? chatData.currentUser.name
                        : chatData.otherParty.name}
                    </span>
                  </div>
                  <p>{message.text}</p>
                  <p className="text-xs text-right mt-1 opacity-70">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Message */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3">
          <div className="max-w-4xl mx-auto px-4 flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="mr-1" size={18} />
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}