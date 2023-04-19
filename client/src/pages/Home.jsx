/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <NavigationBar />
      <h1>Home</h1>
      <p>O seu objetivo é adivinhar as pessoas autoras de frases icônicas proferidas no ambiente de estudo da Turma 24 - Tribo B - do curso de Desenvolvimento Web da Trybe</p>
      <button type="button" onClick={() => navigate('/game')}>Começar</button>
    </div>
  );
}

export default Home;
