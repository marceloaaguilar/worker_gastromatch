import { useState } from "react";
import Header from "../components/Header/Header";
import { CalendarDays, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";

const agendamentos = [
  {
    id: 1,
    cliente: "Ana Paula",
    data: "2025-06-12",
    hora: "19:00",
    local: "Rua das Flores, 123 - São Paulo, SP",
    pessoas: 6,
    especialidade: "Italiana",
    detalhes: {
      pratoPrincipal: "Lasanha de Berinjela",
      observacoes: "Cliente alérgica a frutos do mar",
      valor: "R$ 1.200,00",
    },
  },
  {
    id: 2,
    cliente: "Carlos Oliveira",
    data: "2025-06-15",
    hora: "12:00",
    local: "Av. Paulista, 900 - São Paulo, SP",
    pessoas: 10,
    especialidade: "Contemporânea",
    detalhes: {
      pratoPrincipal: "Filé ao molho de vinho",
      observacoes: "Mesa ao ar livre",
      valor: "R$ 2.000,00",
    },
  },
  {
    id: 3,
    cliente: "Fernanda Lima",
    data: "2025-06-18",
    hora: "20:00",
    local: "Rua Verde, 321 - Campinas, SP",
    pessoas: 4,
    especialidade: "Francesa",
    detalhes: {
      pratoPrincipal: "Ratatouille com risoto",
      observacoes: "Levar talheres especiais",
      valor: "R$ 800,00",
    },
  },
];

export default function ChefAgendamentosPage() {
  const [detalhesVisiveis, setDetalhesVisiveis] = useState<{ [id: number]: boolean }>({});

  const toggleDetalhes = (id: number) => {
    setDetalhesVisiveis((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#fff8f0] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#ea580c] mb-2">
            Seus Agendamentos
          </h1>
          <p className="text-lg text-gray-700">
            Confira os eventos onde você foi contratado para cozinhar.
          </p>
        </div>
      </section>

      {/* Lista de Agendamentos */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-12 grid gap-6">
          {agendamentos.map((evento) => (
            <div
              key={evento.id}
              className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-[#7c2d12]">
                    Evento para {evento.cliente}
                  </h2>
                  <p className="text-gray-600">
                    Especialidade: <span className="font-medium">{evento.especialidade}</span>
                  </p>
                  <p className="text-gray-600">Pessoas: {evento.pessoas}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-gray-700">
                    <CalendarDays className="w-5 h-5 text-[#ea580c]" />
                    {evento.data}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-5 h-5 text-[#ea580c]" />
                    {evento.hora}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#ea580c]" />
                    {evento.local}
                  </p>
                </div>
              </div>

              {/* Botão ver mais */}
              <div className="mt-4">
                <button
                  onClick={() => toggleDetalhes(evento.id)}
                  className="flex items-center gap-2 text-[#ea580c] hover:underline font-medium"
                >
                  {detalhesVisiveis[evento.id] ? (
                    <>
                      Ocultar detalhes <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Ver mais detalhes <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Detalhes extras */}
              {detalhesVisiveis[evento.id] && (
                <div className="mt-4 bg-[#fff4ec] p-4 rounded-lg border border-[#f9dcc6] text-sm">
                  <p>
                    <span className="font-semibold">Prato principal:</span> {evento.detalhes.pratoPrincipal}
                  </p>
                  <p>
                    <span className="font-semibold">Observações:</span> {evento.detalhes.observacoes}
                  </p>
                  <p>
                    <span className="font-semibold">Valor:</span> {evento.detalhes.valor}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
