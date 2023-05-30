import React from 'react';
import './App.css';
import Imagem from './img/chameleon.png';

function About() {
  
    return (     
 
    <div className="center">
      <div className="conteudo-single">
      <div className="imagemCamaleao">
      <img 
        src={Imagem} 
        alt="Camaleão mudando de cor"
        className="imagemCamaleao"
      />
    </div>
      </div>
      <div className="conteudo-single">
    <h3>Que cor você quer hoje?</h3>
    <p>lalalala</p>
      </div>
      <div className="conteudo-single">
    <h3>Titutlo</h3>
    <p>lalalala</p>
      </div>
      </div>     
  )
}

export default About;