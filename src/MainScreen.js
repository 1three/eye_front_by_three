import React from 'react';
import logoImage from './logo.png';
import './style.css';

function MainScreen() {
  return (
    <div className="main-screen">
      <img src={logoImage} alt="Logo" className="logo" />
    </div>
  );
}

export default MainScreen;