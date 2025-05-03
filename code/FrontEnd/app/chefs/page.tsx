"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ChevronDown, Filter, Search } from "lucide-react";
import Header from "@/components/header";
import { useState } from "react";

const chefsData = [
  {
    id: 1,
    name: "Chef Ricardo Silva",
    specialty: "Culinária Italiana e Mediterrânea",
    description:
      "Especialista em culinária italiana e mediterrânea com 15 anos de experiência em restaurantes premiados. Cria experiências gastronômicas memoráveis com ingredientes frescos e técnicas refinadas.",
    rating: 4.9,
    price: 150,
    tags: ["Italiana", "Mediterrânea", "Gourmet"],
    image: "/images/chef ricardo.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Chef Maria Santos",
    specialty: "Gastronomia Contemporânea",
    description:
      "Especializada em gastronomia contemporânea e fusion food, com foco em ingredientes orgânicos e sazonais. Oferece menus criativos que surpreendem pelo sabor e apresentação.",
    rating: 4.4,
    price: 130,
    tags: ["Contemporânea", "Fusion", "Vegetariana"],
    image: "/images/chef maria.jpg",
  },
  {
    id: 3,
    name: "Chef André Costa",
    specialty: "Culinária Francesa e Patisserie",
    description:
      "Chef especializado em culinária francesa e patisserie, formado na França. Cria pratos sofisticados e sobremesas artísticas que encantam pelo sabor e apresentação impecável.",
    rating: 3.9,
    price: 180,
    tags: ["Francesa", "Patisserie", "Gourmet"],
    image: "/images/chefe andre.jpg",
  },
  {
    id: 4,
    name: "Chef Juliana Mendes",
    specialty: "Culinária Brasileira Contemporânea",
    description:
      "Especialista em culinária brasileira contemporânea, valorizando ingredientes nacionais e técnicas modernas. Cria pratos que celebram a diversidade da gastronomia brasileira.",
    rating: 4.8,
    price: 140,
    tags: ["Brasileira", "Contemporânea", "Regional"],
    image: "/images/chef juliana.jpg",
  },
  {
    id: 5,
    name: "Chef Paulo Oliveira",
    specialty: "Culinária Japonesa",
    description:
      "Chef especializado em culinária japonesa tradicional e contemporânea. Oferece experiências de sushi omakase e pratos quentes da gastronomia japonesa com técnica impecável.",
    rating: 4.6,
    price: 160,
    tags: ["Japonesa", "Sushi", "Asiática"],
    image: "/images/chef paulo.jpg",
  },
  {
    id: 6,
    name: "Chef Camila Rocha",
    specialty: "Gastronomia Vegana",
    description:
      "Especialista em gastronomia vegana criativa e nutritiva. Transforma ingredientes vegetais em pratos sofisticados e saborosos que agradam a todos os paladares.",
    rating: 4.8,
    price: 120,
    tags: ["Vegana", "Plant-based", "Saudável"],
    image: "/images/chef camila.jpg",
  },
];

export default function ChefsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

  const specialties = [
    "Italiana",
    "Francesa",
    "Japonesa",
    "Brasileira",
    "Mediterrânea",
    "Vegana"
  ];

  const priceRanges = [
    { label: "Até R$ 100", value: "0-100" },
    { label: "R$ 100 - R$ 150", value: "100-150" },
    { label: "R$ 150 - R$ 200", value: "150-200" },
    { label: "Acima de R$ 200", value: "200+" }
  ];

  const availabilityOptions = [
    "Manhã",
    "Tarde",
    "Noite"
  ];

  const filteredChefs = chefsData.filter((chef) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      chef.name.toLowerCase().includes(term) ||
      chef.specialty.toLowerCase().includes(term) ||
      chef.tags.some((tag) => tag.toLowerCase().includes(term));

    const matchesSpecialty = selectedSpecialties.length === 0 || 
      selectedSpecialties.some(specialty => 
        chef.specialty.toLowerCase().includes(specialty.toLowerCase()) ||
        chef.tags.some(tag => tag.toLowerCase().includes(specialty.toLowerCase()))
      );

    const matchesRating = !selectedRating || (() => {
      switch (selectedRating) {
        case 5:
          return chef.rating >= 4.5;
        case 4:
          return chef.rating >= 4.0 && chef.rating < 4.5;
        case 3:
          return chef.rating < 4.0;
        default:
          return true;
      }
    })();

    const matchesPrice = !selectedPrice || (() => {
      const [min, max] = selectedPrice.split('-').map(Number);
      if (selectedPrice.endsWith('+')) {
        return chef.price >= Number(selectedPrice.replace('+', ''));
      }
      return chef.price >= min && chef.price <= max;
    })();

    return matchesSearch && matchesSpecialty && matchesRating && matchesPrice;
  });

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Chefs Profissionais
            </h1>
            <p className="text-lg text-gray-700 mb-0">
              Descubra os melhores chefs disponíveis para criar experiências
              gastronômicas únicas para você e seus convidados.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nome ou especialidade..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-primary-600 focus:border-primary-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Dropdown Especiality */}
              <div className="relative">
                <button 
                  className={`px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50 ${
                    selectedSpecialties.length > 0 ? 'border-primary-600 bg-primary-50 text-primary-600' : ''
                  }`}
                  onClick={() => setIsSpecialtyOpen(!isSpecialtyOpen)}
                >
                  <Filter className="h-4 w-4" />
                  <span>Especialidade</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isSpecialtyOpen && (
                  <div 
                    className="absolute z-10 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg"
                    onMouseLeave={() => setIsSpecialtyOpen(false)}
                  >
                    <div className="p-2">
                      <div className="space-y-1">
                        {specialties.map((specialty) => (
                          <label 
                            key={specialty}
                            className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSpecialties.includes(specialty)}
                              onChange={() => toggleSpecialty(specialty)}
                              className="rounded text-primary-600 focus:ring-primary-600"
                            />
                            <span>{specialty}</span>
                          </label>
                        ))}
                      </div>
                      <button
                        className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded mt-2"
                        onClick={() => setSelectedSpecialties([])}
                      >
                        Limpar filtro
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Rate */}
              <div className="relative">
                <button 
                  className={`px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50 ${
                    selectedRating !== null ? 'border-primary-600 bg-primary-50 text-primary-600' : ''
                  }`}
                  onClick={() => setIsRatingOpen(!isRatingOpen)}
                >
                  <span>Avaliação</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isRatingOpen && (
                  <div 
                    className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                    onMouseLeave={() => setIsRatingOpen(false)}
                  >
                    <div className="p-2 space-y-1">
                      {[5, 4, 3].map((rating) => (
                        <label 
                          key={rating}
                          className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded"
                        >
                          <input
                            type="radio"
                            name="rating"
                            checked={selectedRating === rating}
                            onChange={() => setSelectedRating(rating)}
                            className="text-primary-600 focus:ring-primary-600"
                          />
                          <div className="flex">
                            {[...Array(rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-primary-600 text-primary-600"
                              />
                            ))}
                          </div>
                        </label>
                      ))}
                      <button
                        className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                        onClick={() => setSelectedRating(null)}
                      >
                        Limpar filtro
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Price */}
              <div className="relative">
                <button 
                  className={`px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50 ${
                    selectedPrice !== null ? 'border-primary-600 bg-primary-50 text-primary-600' : ''
                  }`}
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                >
                  <span>Preço</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isPriceOpen && (
                  <div 
                    className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                    onMouseLeave={() => setIsPriceOpen(false)}
                  >
                    <div className="p-2 space-y-1">
                      {priceRanges.map((range) => (
                        <label 
                          key={range.value}
                          className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded"
                        >
                          <input
                            type="radio"
                            name="price"
                            checked={selectedPrice === range.value}
                            onChange={() => setSelectedPrice(range.value)}
                            className="text-primary-600 focus:ring-primary-600"
                          />
                          <span>{range.label}</span>
                        </label>
                      ))}
                      <button
                        className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                        onClick={() => setSelectedPrice(null)}
                      >
                        Limpar filtro
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown Disponibilidade */}
              <div className="relative">
                <button 
                  className={`px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50 ${
                    selectedAvailability.length > 0 ? 'border-primary-600 bg-primary-50 text-primary-600' : ''
                  }`}
                  onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
                >
                  <span>Disponibilidade</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isAvailabilityOpen && (
                  <div 
                    className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                    onMouseLeave={() => setIsAvailabilityOpen(false)}
                  >
                    <div className="p-2 space-y-1">
                      {availabilityOptions.map((option) => (
                        <label 
                          key={option}
                          className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={selectedAvailability.includes(option)}
                            onChange={() => {
                              setSelectedAvailability(prev => 
                                prev.includes(option)
                                  ? prev.filter(item => item !== option)
                                  : [...prev, option]
                              );
                            }}
                            className="rounded text-primary-600 focus:ring-primary-600"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                      <button
                        className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                        onClick={() => setSelectedAvailability([])}
                      >
                        Limpar filtro
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChefs.map((chef) => (
              <div
                key={chef.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{chef.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-primary-600 text-primary-600" />
                      <span className="ml-1">{chef.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{chef.specialty}</p>
                  <p className="text-gray-700 mb-4">{chef.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {chef.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      R$ {chef.price}/hora
                    </span>
                    <Link
                      href={`/chefs/${chef.id}`}
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300"
                    >
                      Ver Perfil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Não encontrou o chef ideal?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Entre em contato conosco e ajudaremos a encontrar o profissional
            perfeito para sua ocasião especial.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Falar com um Consultor
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2937] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">GastroMatch</h3>
            <p className="text-sm text-gray-300">
              Conectando os melhores chefs profissionais a experiências
              gastronômicas únicas.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sobre" className="hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/agendamentos" className="hover:text-white">
                  Agendamentos
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-white">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>contato@gastromatch.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
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
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="hover:text-white">
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
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="hover:text-white">
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
                  className="w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} GastroMatch. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
