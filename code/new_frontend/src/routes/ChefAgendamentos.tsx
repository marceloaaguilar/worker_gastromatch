import Header from "../components/Header/Header";
import { CalendarDays, MapPin, Clock } from "lucide-react";

const agendamentos = [
  {
    id: 1,
    cliente: "Ana Paula",
    data: "2025-06-12",
    hora: "19:00",
    local: "Rua das Flores, 123 - São Paulo, SP",
    pessoas: 6,
    especialidade: "Italiana",
  },
  {
    id: 2,
    cliente: "Carlos Oliveira",
    data: "2025-06-15",
    hora: "12:00",
    local: "Av. Paulista, 900 - São Paulo, SP",
    pessoas: 10,
    especialidade: "Contemporânea",
  },
  {
    id: 3,
    cliente: "Fernanda Lima",
    data: "2025-06-18",
    hora: "20:00",
    local: "Rua Verde, 321 - Campinas, SP",
    pessoas: 4,
    especialidade: "Francesa",
  },
];

export default function ChefAgendamentosPage() {
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
              className="border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300"
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
                <div className="space-y-2">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
