import Image from "next/image"
import Link from "next/link"
import { Star, ChevronDown, Filter, Search } from "lucide-react"
import Header from "@/components/header"

export default function ChefsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossos Chefs Profissionais</h1>
            <p className="text-lg text-gray-700 mb-0">
              Descubra os melhores chefs disponíveis para criar experiências gastronômicas únicas para você e seus
              convidados.
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
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Especialidade Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  <span>Especialidade</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute z-10 mt-1 w-56 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="p-2">
                    <div className="space-y-1">
                      <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                        <span>Italiana</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                        <span>Francesa</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                        <span>Japonesa</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                        <span>Brasileira</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                        <span>Mediterrânea</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                        <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                        <span>Vegana</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avaliação Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50">
                  <span>Avaliação</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute z-10 mt-1 w-48 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="p-2 space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="rating" className="text-primary-600 focus:ring-primary-600" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary-600 text-primary-600" />
                        ))}
                        <span className="ml-1">5 estrelas</span>
                      </div>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="rating" className="text-primary-600 focus:ring-primary-600" />
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary-600 text-primary-600" />
                        ))}
                        <span className="ml-1">4+ estrelas</span>
                      </div>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="rating" className="text-primary-600 focus:ring-primary-600" />
                      <div className="flex">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary-600 text-primary-600" />
                        ))}
                        <span className="ml-1">3+ estrelas</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Preço Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50">
                  <span>Preço</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute z-10 mt-1 w-48 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="p-2 space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="price" className="text-primary-600 focus:ring-primary-600" />
                      <span>Até R$ 100</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="price" className="text-primary-600 focus:ring-primary-600" />
                      <span>R$ 100 - R$ 150</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="price" className="text-primary-600 focus:ring-primary-600" />
                      <span>R$ 150 - R$ 200</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="radio" name="price" className="text-primary-600 focus:ring-primary-600" />
                      <span>Acima de R$ 200</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Disponibilidade Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white flex items-center gap-2 hover:bg-gray-50">
                  <span>Disponibilidade</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute z-10 mt-1 w-48 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
                  <div className="p-2 space-y-1">
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                      <span>Dias de semana</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                      <span>Finais de semana</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                      <span>Manhã</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                      <span>Tarde</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded">
                      <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-600" />
                      <span>Noite</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chef Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src="/images/ricardo chef.jpg" alt="Chef Ricardo Silva" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
                  Destaque
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">Chef Ricardo Silva</h3>
                    <p className="text-gray-600">Culinária Italiana e Mediterrânea</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                    <span className="font-medium">4.9</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Italiana</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Mediterrânea</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Gourmet</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Especialista em culinária italiana e mediterrânea com 15 anos de experiência em restaurantes
                  premiados. Cria experiências gastronômicas memoráveis com ingredientes frescos e técnicas refinadas.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preço médio por pessoa</p>
                    <p className="text-lg font-bold text-primary-600">R$ 150,00</p>
                  </div>
                  <Link
                    href="/agendamentos"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            </div>

            {/* Chef Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src="/images/chef 1.jpg" alt="Chef Maria Santos" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">Chef Maria Santos</h3>
                    <p className="text-gray-600">Gastronomia Contemporânea</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                    <span className="font-medium">4.7</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Contemporânea</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Fusion</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Vegetariana</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Especializada em gastronomia contemporânea e fusion food, com foco em ingredientes orgânicos e
                  sazonais. Oferece menus criativos que surpreendem pelo sabor e apresentação.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preço médio por pessoa</p>
                    <p className="text-lg font-bold text-primary-600">R$ 130,00</p>
                  </div>
                  <Link
                    href="/agendamentos"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            </div>

            {/* Chef Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src="/images/andre chef.jpg" alt="Chef André Costa" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">Chef André Costa</h3>
                    <p className="text-gray-600">Culinária Francesa e Patisserie</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                    <span className="font-medium">4.9</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Francesa</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Patisserie</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Gourmet</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Chef especializado em culinária francesa e patisserie, formado na França. Cria pratos sofisticados e
                  sobremesas artísticas que encantam pelo sabor e apresentação impecável.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preço médio por pessoa</p>
                    <p className="text-lg font-bold text-primary-600">R$ 180,00</p>
                  </div>
                  <Link
                    href="/agendamentos"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            </div>

            {/* Chef Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src="/images/juliana.jpg" alt="Chef Juliana Mendes" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">Chef Juliana Mendes</h3>
                    <p className="text-gray-600">Culinária Brasileira Contemporânea</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                    <span className="font-medium">4.8</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Brasileira</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Contemporânea</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Regional</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Especialista em culinária brasileira contemporânea, valorizando ingredientes nacionais e técnicas
                  modernas. Cria pratos que celebram a diversidade da gastronomia brasileira.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preço médio por pessoa</p>
                    <p className="text-lg font-bold text-primary-600">R$ 140,00</p>
                  </div>
                  <Link
                    href="/agendamentos"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            </div>

            {/* Chef Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src="/images/juliano.jpg" alt="Chef Paulo Oliveira" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">Chef Paulo Oliveira</h3>
                    <p className="text-gray-600">Culinária Japonesa</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                    <span className="font-medium">4.6</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Japonesa</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Sushi</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Asiática</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Chef especializado em culinária japonesa tradicional e contemporânea. Oferece experiências de sushi
                  omakase e pratos quentes da gastronomia japonesa com técnica impecável.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preço médio por pessoa</p>
                    <p className="text-lg font-bold text-primary-600">R$ 160,00</p>
                  </div>
                  <Link
                    href="/agendamentos"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            </div>

            {/* Chef Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image src="/images/chefe 2.jpg" alt="Chef Camila Rocha" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl">Chef Camila Rocha</h3>
                    <p className="text-gray-600">Gastronomia Vegana</p>
                  </div>
                  <div className="flex items-center bg-primary-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-primary-600 text-primary-600 mr-1" />
                    <span className="font-medium">4.8</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Vegana</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Plant-based</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">Saudável</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  Especialista em gastronomia vegana criativa e nutritiva. Transforma ingredientes vegetais em pratos
                  sofisticados e saborosos que agradam a todos os paladares.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Preço médio por pessoa</p>
                    <p className="text-lg font-bold text-primary-600">R$ 120,00</p>
                  </div>
                  <Link
                    href="/agendamentos"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Agendar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-primary-600 bg-primary-600 text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Não encontrou o chef ideal?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Entre em contato conosco e ajudaremos a encontrar o profissional perfeito para sua ocasião especial.
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
              Conectando os melhores chefs profissionais a experiências gastronômicas únicas.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/agendamentos" className="hover:text-white">
                  Agendamentos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
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
          © 2025 GastroMatch. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
