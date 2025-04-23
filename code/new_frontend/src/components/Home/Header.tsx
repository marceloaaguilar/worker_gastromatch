import { Link } from "react-router";

export default function Header() {

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white md:px-12">
        <Link to="/" className="text-xl font-bold text-primary">
        GastroMatch
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-primary">
            Início
        </Link>
        <Link to="/agendamentos" className="text-gray-700 hover:text-primary">
            Agendamentos
        </Link>
        <Link to="#" className="text-gray-700 hover:text-primary">
            Chefs
        </Link>
        <Link to="#" className="text-gray-700 hover:text-primary">
            Contato
        </Link>
        </nav>
        <div className="flex items-center space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-primary">
            Entrar
        </Link>
        <Link to="/cadastro" className="bg-[#ea580c] text-white px-4 py-2 rounded-md hover:bg-primary-700">
            Cadastrar
        </Link>
        </div>
    </header>
  )
  
}