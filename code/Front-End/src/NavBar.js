import React from 'react';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">GastroMatch</div>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Destaques</a></li>
          <li><a href="#">Contato</a></li>
          <li className="user-icon">
            <a href="#">
              <img src="user.png" alt="Usuário" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
