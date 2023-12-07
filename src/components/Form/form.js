// Form.js
import React from 'react';
import '../Form/form.css'; 
import '../css/main.css'
import '../css/resets.css'
import '../Popup/popup'

function LoginForm({ onLogin, onOpenPopup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  const handleCreateAccountClick = () => {
    onOpenPopup();
  };

  return (
    <section className="form-side">
      <form className="form" onSubmit={handleSubmit}>
        <input id="email-login" type="text" className="entrada" placeholder="Digite seu e-mail" />
        <input id="password-login" type="password" className="entrada" placeholder="Digite sua senha" />
        <button id="loginButton" value="Sign In" className="entrada pink">
          Entrar
        </button>

        <a href="forgot-password.html">esqueceu a senha?</a>
        <div className="line"></div>
        <input
          id="create-account-button"
          type="button"
          placeholder="Criar nova conta"
          value="Criar nova conta"
          className="black-btn"
          onClick={handleCreateAccountClick} 
        />
      </form>
      <p>
        Precisa de ajuda?<a href="#"> Clique aqui e fale com a nossa equipe.</a>
      </p>
    </section>
  );
}

export default LoginForm;
