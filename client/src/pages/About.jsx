import React from 'react';
import NavigationBar from '../components/NavigationBar';

function About() {
  return (
    <div>
      <NavigationBar />
      <h1>Colaboradores</h1>
      <ul>
        <li>Valéria Menezes</li>
        <li>Sérgio Ruza</li>
        <li>Arthur Debiasi</li>
      </ul>
    </div>
  );
}

export default About;
