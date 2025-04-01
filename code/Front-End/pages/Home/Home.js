import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/hero-chef.jpg" alt="Chef cooking in kitchen" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Search Bar */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2 flex">
            <input
              type="text"
              placeholder="Busque por nome, especialidade ou cidade"
              className="flex-1 p-2 outline-none text-gray-700"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="mt-32 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Especialidades Culinárias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image src="/images/jantares-especiais.jpg" alt="Jantares Especiais" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Jantares Especiais</h3>
              <p className="text-gray-600 text-sm">Experiências gastronômicas exclusivas</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image src="/images/comida-saudavel.jpg" alt="Comida Saudável" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Comida Saudável</h3>
              <p className="text-gray-600 text-sm">Pratos nutritivos e saborosos</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/images/culinaria-internacional.jpg"
                alt="Culinária Internacional"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Culinária Internacional</h3>
              <p className="text-gray-600 text-sm">Sabores do mundo todo</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 relative">
              <Image src="/images/comida-brasileira.jpg" alt="Comida Brasileira" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Comida Brasileira</h3>
              <p className="text-gray-600 text-sm">O melhor da nossa culinária</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chefs Section */}
      <section className="mt-20 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Chefs em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chef 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src="/images/chef-ricardo.jpg"
                  alt="Chef Ricardo Silva"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Chef Ricardo Silva</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(126 avaliações)</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Especialista em culinária italiana e mediterrânea com 15 anos de experiência.
            </p>
            <Link
              href="/agendamentos"
              className="block w-full bg-primary text-white py-2 rounded-md hover:bg-primary-700 text-center"
            >
              Agendar
            </Link>
          </div>

          {/* Chef 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src="/images/chef-maria.jpg"
                  alt="Chef Maria Santos"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Chef Maria Santos</h3>
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-xs text-gray-500 ml-1">(95 avaliações)</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Especializada em gastronomia contemporânea e fusion food.</p>
            <Link
              href="/agendamentos"
              className="block w-full bg-primary text-white py-2 rounded-md hover:bg-primary-700 text-center"
            >
              Agendar
            </Link>
          </div>

          {/* Chef 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-4">
                <Image src="/images/chef-andre.jpg" alt="Chef André Costa" fill className="rounded-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold">Chef André Costa</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(158 avaliações)</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Chef especializado em culinária francesa e patisserie.</p>
            <Link
              href="/agendamentos"
              className="block w-full bg-primary text-white py-2 rounded-md hover:bg-primary-700 text-center"
            >
              Agendar
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">O que Dizem Nossos Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-3">
                <Image src="/images/ana-paula.jpg" alt="Ana Paula" fill className="rounded-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Ana Paula</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Experiência incrível! O chef preparou um jantar maravilhoso para nossa celebração em família."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-3">
                <Image
                  src="/images/carlos-eduardo.jpg"
                  alt="Carlos Eduardo"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">Carlos Eduardo</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Impressionante! O chef não só cozinhou, mas também nos ensinou muito sobre gastronomia."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-3">
                <Image src="/images/marina-silva.jpg" alt="Marina Silva" fill className="rounded-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Marina Silva</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              "Superou todas as expectativas! Uma experiência gastronômica única e memorável."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-[#1f2937] text-white">
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
