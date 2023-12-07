import React from 'react';
import '../Footer/footer.css'; 
import '../css/main.css'
import '../css/resets.css'

function Footer() {
    return (
      <footer className="footer">
         <div className="footer-terms">
        <a href="#">Termos de Serviço</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Ajuda</a>
        <a href="#">Sobre</a>
        <a href="#">Central de Privacidade</a>
      </div>
      <div className="footer-language">
        <select id="language" name="language">
          <option value="pt-BR">Português (BR)</option>
          <option value="en-US">English (US)</option>
  
        </select>
      </div>
      <div className="footer-info">
        <p>&copy; 2023 TravelConnect</p>
      </div>
      </footer>
    );
  }
  export default Footer;