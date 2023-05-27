
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="image">
      <div className="main">
        <div className="center">
        <div className="menu">
          <div className="logo">
          <h3>ChameleonTI</h3>
            </div> 
          <div className="item-menu">
            <a>Login</a>
          </div>
        </div>

        <div className="form"> 
        <form>        
        <h2>Entre em contato!</h2> 
        <div className="items-form">
          <input placeholder="Nome" type='text' />
          <input placeholder="Sobrenome" type='text' />
          <input placeholder="E-mail" type='text' /> 
          <input placeholder="Celular/Whatsapp" type='text' /> 
          <input placeholder="Seu nome" type='submit' />
        </div>
        </form>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
