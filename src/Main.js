import React, { useEffect, useState } from 'react';
import Background1 from "./img/backgroundship2.png"
import Background2 from "./img/backgroundship.png"
import TextForm from './TextForm';

/*BANNER ROTATIVO COM 2 IMAGENS*/
const images = [
  Background1,
  Background2
];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="slider" className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          className={index === currentImageIndex ? 'selected' : ''}
          src={image}
          alt={`Image${index + 1}`}
        />
      ))}
      
{/* NAVBAR */}
<div className="center"> 
        
        <div className="menu">               
            <div className="logo">
          <h3>ChameleonTI</h3>
            </div> 
        <div className="item-menu" alt="testando">
        <ul>     
            <li><a href='#'>INÍCIO</a></li>       
            <li><a href='#'>SOBRE</a></li>
            <li><a href='#'>CONTATO</a></li>           
         </ul>
        </div>         
      </div>
{/* SLOGAN */}
      <div className='textForm'>
     <TextForm/>
      </div>  
</div>
{/* FORMULÁRIO PRA CAPTAÇÃO DE LEADS */}
<form>  
  <div className="conteudo-form">    
        <div class="header">  
                <div>Chameleon<span>TI</span></div>         
        </div>              
      <div className="inputs">
            <input type="text" placeholder="nome completo" name="nome" />
            <input type="password" placeholder="e-mail" name="e-mail" />
            <input type="button" value="Enviar" />
      </div>      
  </div>  
</form>

</div>
  
  );
};

export default Main;