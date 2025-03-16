import React from "react";
import "./PopularChefs.css";

function PopularChefs() {
  return (
    <section className="popular-chefs">
      <h2>Chefs Populares</h2>
      <div className="highlight-cards">
        <div className="card">
          <img src="Maria.jpg" alt="Chef 1" />
          <h3>Chef Maria Souza</h3>
          <p>Especialista em Cozinha Italiana</p>
        </div>
        <div className="card">
          <img src="joao.jpg" alt="Chef 2" />
          <h3>Chef João Lima</h3>
          <p>Alta Gastronomia Contemporânea</p>
        </div>
        <div className="card">
          <img src="Ana.jpg" alt="Chef 3" />
          <h3>Chef Ana Clara</h3>
          <p>Doces e Sobremesas Exclusivas</p>
        </div>
      </div>
    </section>
  );
}

export default PopularChefs;
