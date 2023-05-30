// import React from 'react';
// import './App.css';
// import Imagem from './img/chameleon.png';


// function About() {
  
//   return (
//     <div className="center">
//     <div className="conteudo-single">
//     <div className="imagemCamaleao">
//     <img 
//       src={Imagem} 
//       alt="Camaleão mudando de cor"
//       className="imagemCamaleao"
//     />
//   </div>
  
//     </div>
//     <div className="conteudo-single">
//   <h3>QUE COR EU QUERO TER HOJE?</h3>    
//   </div>
//   <div className="conteudo-single">
//     <h2>Esta é a pergunta que nos fazemos todos os dias na CHAMELEONTI. Assim como um camaleão, nossa missão é nos adaptarmos a cada novo desafio e projeto. Trabalhamos para transformar as suas ideias em soluções de software, apps e interfaces de usuário únicas, que combinam design inteligente e funcionalidade intuitiva</h2>
//   </div>
    
//     </div>     
// )
// }

// export default About;

import React from 'react';
import './App.css';
import Imagem from './img/chameleon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPalette, faDisplay, faMobile, faPeopleGroup, faBullseye, faChartSimple, faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import image1 from './img/img 1.jpg';
import image2 from './img/img 2.jpg';
import image3 from './img/img 3.jpg';
import { useState, useEffect, useRef} from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const images = [image1, image2, image3, image2, image1, image2]

function About() {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    
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
        <p className="descricao">Essa é a pergunta que nos fazemos todos os dias na Chameleon.TI. Assim como um camaleão, nossa missão é nos adaptarmos a cada novo desafio e projeto. Trabalhamos para transformar as suas ideias em soluções de software, apps e interfaces de usuário únicas, que combinam design inteligente e funcionalidade intuitiva.</p>
        <p className='descricao'>Faça contato com uma equipe de especialistas e descubra qual a solução perfeita para o seu negócio!</p>
        <button className='conversarAgora'>CONVERSAR AGORA</button>
      </div>
      <div className='vantagens' id='serviços'> 
      <h2>VANTAGENS DE CONTRATAR A CHAMELEON</h2>
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
      <h2>PROJETOS RECENTES</h2>
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
      <h2>ENTRE EM CONTATO</h2>     
      
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
      <div className="contact-section">
      <div class="address-container">
      <div className="contact-info">
        
        <div className="info-item">
          <FontAwesomeIcon className='marker' icon={faMapMarkerAlt} />
          <p>Rua XV de Novembro, Centro - Blumenau/SC</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon className='phone' icon={faPhone} />
          <p>(47) 0000 0000</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon className='envelope' icon={faEnvelope} />
          <p>email@gmail.com</p>
        </div>
        </div>
      </div>
      <div class="form-container">
      
              <form className='formularioContact'>
              <p className="textoInput">Para que uma equipe especialista faça contato com você, informe os dados abaixo</p>     
              <input className='inputsAbout' type="text" placeholder="nome completo" name="nome" />
              <input className='inputsAbout' type="e-mail" placeholder="e-mail" name="e-mail" />
                <input className='inputsAbout' type="button" value="Enviar" />   
              </form>
    </div>
    </div>
    </div>     
    </div>
    
  )
}

export default About;