import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white md:px-12">
      <Link href="/" className="text-xl font-bold text-primary">
        GastroMatch
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-700 hover:text-primary">
          Início
        </Link>
        <Link href="/agendamentos" className="text-gray-700 hover:text-primary">
          Agendamentos
        </Link>
        <Link href="/chefs" className="text-gray-700 hover:text-primary-600">
        Chefs
        </Link>
        <Link href="/avaliacao" className="text-gray-700 hover:text-primary-600">
          Histórico
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-primary">
          Entrar
        </Link>
        <Link href="/cadastro" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-700">
          Cadastrar
          </Link>
        <Link href="/perfil" className="text-gray-700 hover:text-primary-600">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-700 font-bold">M</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
