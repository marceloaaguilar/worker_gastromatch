import React from "react";
import "./Packages.css";

function Packages() {
  return (
    <section className="packages">
      <h2>Escolha o Seu Pacote</h2>
      <div className="package-cards">
        <div className="card">
          <h3>Clássico</h3>
          <p>Inclui o serviço do chef. Ingredientes por sua conta.</p>
        </div>
        <div className="card popular">
          <h3>Mais Escolhido</h3>
          <p>Inclui frete e ingredientes do chef.</p>
        </div>
        <div className="card">
          <h3>Sofisticado</h3>
          <p>Tudo incluso com menu exclusivo e amplo.</p>
        </div>
      </div>
    </section>
  );
}

export default Packages;
