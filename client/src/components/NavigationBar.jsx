import React from 'react';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/game">Jogo</a></li>
        <li><a href="/about">Sobre</a></li>
        <li><a href="/">Sair</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
