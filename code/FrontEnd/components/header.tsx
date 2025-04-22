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
        <Link href="#" className="text-gray-700 hover:text-primary">
          Contato
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-primary">
          Entrar
        </Link>
        <Link href="/cadastro" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-700">
          Cadastrar
        </Link>
      </div>
    </header>
  )
}

