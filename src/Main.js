import React, { useEffect, useState } from 'react';
import Background1 from "./img/background1.jpg"
import Background2 from "./img/background2.jpg"
import TextForm from './TextForm';
import Form from './Form';

function handleMenuClick(event, sectionId) {
  event.preventDefault();
  const sectionElement = document.getElementById(sectionId);
  sectionElement.scrollIntoView({ behavior: 'smooth' });
}
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
            
        <div className="item-menu">
        <ul>     
        <li><a href='#' onClick={(event) => handleMenuClick(event, 'chameleon')}>CHAMELEONTI</a></li>      
        <li><a href='#' onClick={(event) => handleMenuClick(event, 'serviços')}>SERVIÇOS</a></li>
        <li><a href='#' onClick={(event) => handleMenuClick(event, 'projetos')}>PROJETOS</a></li> 
        <li><a href='#' onClick={(event) => handleMenuClick(event, 'contato')}>CONTATO</a></li>           
         </ul>
        </div>         
      </div>
{/* SLOGAN */}
      <div className='textForm'>
     <TextForm/>
      </div>  
</div>
  <div className='formulario'>
  <Form />
  </div>

  </div>
  );
};

export default Main;