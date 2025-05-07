import Header from "../components/Header/Header";
import { useState } from "react";
import { Star, ChevronDown, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";

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
    image: "/images/chef-ricardo.jpg",
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
    image: "/images/chef-maria.jpg",
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
    image: "/images/chef-andre.jpg",
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
    image: "/images/chef-juliana.jpg",
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
    image: "/images/chef-paulo.jpg",
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
    image: "/images/chef-camila.jpg",
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
                    <div className="p-2">
                      <div className="space-y-1">
                        {[5, 4, 3].map((rating) => (
                          <button
                            key={rating}
                            className={`w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-50 ${
                              selectedRating === rating ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                            onClick={() => {
                              setSelectedRating(selectedRating === rating ? null : rating);
                              setIsRatingOpen(false);
                            }}
                          >
                            {rating} estrelas ou mais
                          </button>
                        ))}
                      </div>
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
                    <div className="p-2">
                      <div className="space-y-1">
                        {priceRanges.map((range) => (
                          <button
                            key={range.value}
                            className={`w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-50 ${
                              selectedPrice === range.value ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                            onClick={() => {
                              setSelectedPrice(selectedPrice === range.value ? null : range.value);
                              setIsPriceOpen(false);
                            }}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
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
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                  {chef.featured && (
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-sm">
                      Destaque
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{chef.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">{chef.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{chef.specialty}</p>
                  <p className="text-gray-700 mb-4 line-clamp-3">{chef.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {chef.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">
                      R$ {chef.price}/hora
                    </span>
                    <Link
                      to={`/chef/${chef.id}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors duration-300"
                    >
                      Ver perfil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 