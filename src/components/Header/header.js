// Header.js
import React from 'react';
import '../Header/header.css'; // Supondo que seus estilos estejam em um arquivo chamado Header.css
import '../css/main.css';
import '../css/resets.css'


function Header() {
  return (
    <header className="face-infos">
      <div className="container">
        <h1>TravelConnect</h1>
        <p>Conectando Viajantes e Compartilhando</p>
        <p>Experiências pelo Mundo.</p>
      </div>
    </header>
  );
}

export default Header;
