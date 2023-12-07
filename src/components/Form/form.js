import { useState } from 'react';
import '../Form/form.css'; 
import '../css/main.css';
import '../css/resets.css';
import Modal from'react-modal'


Modal.setAppElement('#root')
  

function LoginForm() {
  const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
      setIsOpen(true)
    }

    function handleCloseModal(){
      setIsOpen(false)
    }
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%', // Ajuste a largura conforme necessário
        height: '80%', // Ajuste a altura conforme necessário
        borderRadius: '50px',
      }
    };
    

  return (
    <section className="form-side">
      <div className="form">
        <input id="email-login" type="text" className="entrada" placeholder="Digite seu e-mail" />
        <input id="password-login" type="password" className="entrada" placeholder="Digite sua senha" />
        <button id="loginButton" value="Sign In" className="entrada pink">
          Entrar
        </button>

        <a href="forgot-password.html">esqueceu a senha?</a>
        <div className="line"></div>
        <button
          id="create-account-button"
          type="button"
          className="black-btn" onClick={handleOpenModal}
        >
          Criar nova conta
        </button>
      </div>
      <p>
        Precisa de ajuda?<a href="#"> Clique aqui e fale com a nossa equipe.</a>
      </p> 
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={handleCloseModal}
  style={customStyles}
>
  <div className="popup">
    <div className="popup-content">
      <div className="close-button" onClick={handleCloseModal}>x</div>
      <h2>Cadastre-se já</h2>
      <p>É grátis e rápido.</p>
      <form>
          <input type="text" className='entrada' id="username" placeholder="Nome de usuário" />
          <div className="flex-container">
            <div className="flex-item">
              <input type="text" className='entrada' id="firstName" placeholder="Nome" />
            </div>
            <div className="flex-item">
              <input type="text" className='entrada' id="lastName" placeholder="Sobrenome" />
            </div>
          </div>
          <input type="tel" id="phone" className='entrada' placeholder="Número de telefone" />
          <input type="email" id="email" className='entrada' placeholder="E-mail" />
          <input type="password" id="password" className='entrada' placeholder="Senha" />
          <input type="password" id="confirmPassword" className='entrada' placeholder="Confirme sua senha" />
          <label htmlFor="dob" className="with-placeholder">Data de Nascimento:</label>
          <input type="date" id="dob" max="2005-01-01" />
          <label htmlFor="gender" className="with-placeholder">Selecione seu gênero</label>
          <select id="gender" name="gender">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          <button className="signuping" type="button">Registrar</button>
        </form>
    </div>
  </div>
</Modal>
    </section>
   
  );
}

export default LoginForm;
