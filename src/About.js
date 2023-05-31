import React from 'react';
import './App.css';
import Imagem from './img/chameleon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPalette, faDisplay, faMobile, faPeopleGroup, faBullseye, faChartSimple} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import image1 from './img/img1.jpg';
import image2 from './img/img2.jpg';
import image3 from './img/img3.jpg';
import image4 from './img/img4.jpg';
import image5 from './img/img5.jpg';
import image6 from './img/img6.jpg';
import { useState, useEffect, useRef} from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Definindo imagens do slide de projetos recentes
const images = [image1, image2, image3, image4, image5, image6]

function About() {

// Definindo limite e tamanho para poder deslizar o carousel/slides de projetos recentes
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
 
// Conteúdo geral do site com serviços, projetos recentes e contato
      <div className="center">
        <a href="https://wa.me/47991104702" className="whatsapp-icon" target="_blank">
    <FontAwesomeIcon icon={faComments} />
        </a>
      <div className="imagemCamaleao">
          <img 
            src={Imagem} 
            alt="Camaleão mudando de cor"
            className="imagem"
          />
      </div>
      <div className="texto">
        <h2 className="titulo" id='chameleon'>QUE COR EU QUERO TER HOJE?</h2>    
        <p className="descricao">Essa é a pergunta que nos fazemos todos os dias na ChameleonTI. Assim como um camaleão, nossa missão é nos adaptarmos a cada novo desafio e projeto. Trabalhamos para transformar as suas ideias em soluções de software, APPS e interfaces de usuário únicas, que combinam design inteligente e funcionalidade intuitiva.</p>
        <p className='descricao'>Faça contato com uma equipe de especialistas e descubra qual a solução perfeita para o seu negócio!</p>
        <button className='conversarAgora'><a href="https://wa.me/47991104702" target="_blank">CONVERSAR AGORA</a></button>
      </div>
      <div className='vantagens' id='serviços'> 
      <h2 className='titulo'>VANTAGENS DE CONTRATAR A CHAMELEON</h2>
      <div className="grid-vantagens">
        <div className="vantagem">
        <FontAwesomeIcon icon={faPalette} className='meuIcon' />
          <h4>DESIGN</h4>
          <p>Especialistas em UX/UI estão prontos pra te oferecer o melhor serviço do mercado.</p>
        </div>
        <div className="vantagem">
        <FontAwesomeIcon icon={faDisplay} className='meuIcon' />
          <h4>WEBSITES</h4>
          <p>Uma equipe altamente qualificada oferece soluções perfeitas para criar o site ideal para o seu negócio.</p>
        </div>
        <div className="vantagem">
        <FontAwesomeIcon icon={faMobile} className='meuIcon' />
          <h4>APPS</h4>
          <p>Trabalhamos com as mais recentes tecnologias para criar aplicativos eficazes, intuitivos e de alto desempenho.</p>
        </div>
        <div className="vantagem">
        <FontAwesomeIcon icon={faPeopleGroup} className='meuIcon' />
          <h4>ASSESORIA</h4>
          <p>Nossa consultoria dedicada está sempre pronta para orientá-lo em todas as etapas do seu projeto, garantindo que suas metas sejam alcançadas com sucesso.</p>
        </div>
        <div className="vantagem">
        <FontAwesomeIcon icon={faBullseye} className='meuIcon' />
          <h4>INBOUND MARKETING</h4>
          <p>Utilizando técnicas avançadas de Inbound Marketing, ajudamos a atrair, engajar e encantar seus clientes, transformando leads em vendas reais.</p>
        </div>
        <div className="vantagem">
        <FontAwesomeIcon icon={faChartSimple} className='meuIcon' />
          <h4>PERFOMANCE</h4>
          <p>Nosso foco está na eficiência e eficácia, garantindo que todas as nossas soluções sejam otimizadas, trazendo os melhores resultados.</p>
        </div>
      </div>

        <div className='projetos' id='projetos'>
        <h2 className='titulo'>PROJETOS RECENTES</h2>
        </div>
        <div className='slides'>          
          
          <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
            <motion.div className='inner'
                        drag="x"
                        dragConstraints={{right: 0, left: -width}}
                      >

              {images.map(image =>(
                <motion.div className='item' key={image}>
                  <img src={image} alt='Texto alt'/>
                </motion.div>
              ))}

            </motion.div>
          </motion.div>          
          </div>
        </div>     

        <div className="contact" id='contato'>
          <div className="headerContact">
            <h2> <a href="https://wa.me/47991104702" target="_blank" rel="noopener noreferrer">ENTRE EM CONTATO</a></h2>
            <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className='facebook' color='black' />
                </a>
                <a href="https://wa.me/47991104702" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className='whatsapp' color='black'/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className='instagram' color='black'/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className='linkedin' color='black'/>
                </a>
            </div>
          </div>
          <div className="contact-section">
            <div className="address-container">
            <div className="info-item">
                  <p>Rua XV de Novembro, Centro - Blumenau/SC</p>
            </div>
            <div className="info-item">          
                  <p>(47) 0000 0000</p>
            </div>
                <div className="info-item">          
                  <p className='email'>email@gmail.com</p>
                </div>
            </div>
            <div className="form-container">      
            <form className='formularioContact'>  
              <input className='inputsAbout' type="text" placeholder="nome completo" name="nome" />
              <input className='inputsAbout' type="text" placeholder="e-mail" name="e-mail" />
              <input className='inputsAbout' type="tel" placeholder="whatsapp" name="phone" />
              <input className='inputsAbout' type="button" value="Enviar" />   
            </form>
            </div>
          </div>
        </div>  
            </div>
    
  )
}

export default About;