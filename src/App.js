// App.js
import React, { useState } from 'react';
import Header from './components/Header/header'; // Atualize o caminho para Header.js
import Form from './components/Form/form'; // Atualize o caminho para Form.js
import Popup from './components/Popup/popup'; // Atualize o caminho para Popup.js
import Footer from './components/Footer/footer'; // Atualize o caminho para Footer.js

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    console.log('Tentativa de login');
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <Header />
      <main>
        <Form onSubmit={handleLogin} buttonText="Entrar" onOpenPopup={handleOpenPopup} />
      </main>

      {showPopup && <Popup onClosePopup={handleClosePopup} />}

      <Footer />
    </div>
  );
}

export default App;
