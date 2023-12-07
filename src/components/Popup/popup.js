// Popup.js
import React from 'react';
import '../Popup/popup.css';
import '../css/main.css'
import '../css/resets.css'

function Popup({ onClosePopup }) {
  const signup = (e) => {
    e.preventDefault();
    // Lógica de cadastro
    console.log('Tentativa de cadastro');
  };

  return (
    <div id="popup" className="popup">
      <div className="popup-content">
        {/* ... rest of the code for the popup */}
      </div>
    </div>
  );
}

export default Popup;
