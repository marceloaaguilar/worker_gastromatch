import React from "react";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div>
      {/* Barra de Navegação */}
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

      {/* Banner Principal */}
      <header className="main-banner">
        <div className="banner-content">
          <h1>Experiências Exclusivas no Conforto do Seu Lar</h1>
          <p>Contrate um chef particular e transforme sua casa em um restaurante sofisticado.</p>
          <a href="#" className="cta-button">Descubra Mais</a>
        </div>
      </header>

      {/* Como Funciona */}
      <section className="how-it-works">
        <h2>Como Funciona o GastroMatch</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Selecione o Estilo de Evento</h3>
            <p>Escolha o tipo de evento e número de convidados.</p>
          </div>
          <div className="step">
            <h3>2. Escolha o Chef Ideal</h3>
            <p>Selecionamos o chef que mais combina com você.</p>
          </div>
          <div className="step">
            <h3>3. Personalize o Menu</h3>
            <p>Crie um menu exclusivo com o seu chef.</p>
          </div>
          <div className="step">
            <h3>4. Desfrute da Experiência</h3>
            <p>Receba seus convidados e aproveite!</p>
          </div>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section className="about">
        <img src="Tela principal.jpg" alt="Chef preparando prato" />
        <div className="about-text">
          <h2>Sobre o GastroMatch</h2>
          <p>No GastroMatch, conectamos você aos melhores chefs da cidade para experiências gastronômicas personalizadas. Desde jantares íntimos a grandes eventos, garantimos sabor e sofisticação.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
