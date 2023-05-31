function Form() {
    return (  
        <form>
          <div className="conteudo-form">     
          <div class="header">                                     
                <div>Chameleon<span>TI</span></div>                
            </div>              
              <div className="inputs">  
              
             <p className="textoInput">Preencha os campos para que nossa equipe de especialistas faça contato com você</p>        
                <input type="text" placeholder="nome completo" name="nome" />
                <input type="password" placeholder="e-mail" name="e-mail" />
                <input type="button" value="Enviar" />                
              </div>          
            </div>              
        </form>
    );
  }
  
  export default Form;
  