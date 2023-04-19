import React from 'react';
import NavigationBar from '../components/NavigationBar';
// import AppContext from '../context/AppContext';

function Game() {
  return (
    <div>
      <NavigationBar />
      <h1>Game</h1>
      <div>
        <h3>Qual é a fonte do conhecimento?</h3>
        <button type="button">Documentação</button>
        <button type="button">Stack Overflow</button>
        <button type="button">Vídeos de indianos</button>
        <button type="button">O Course</button>
      </div>
    </div>
  );
}

export default Game;
