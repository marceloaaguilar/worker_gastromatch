import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img src="Tela principal.jpg" alt="Chef preparando prato" />
      <div className="about-text">
        <h2>Sobre o GastroMatch</h2>
        <p>No GastroMatch, conectamos você aos melhores chefs da cidade para experiências gastronômicas personalizadas. Desde jantares íntimos a grandes eventos, garantimos sabor e sofisticação.</p>
      </div>
    </section>
  );
}

export default About;
