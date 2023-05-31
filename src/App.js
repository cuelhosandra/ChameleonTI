import './App.css';
import Main from './Main'
import About from './About'

function App() {
  return (
    <div className="App">    
       <div className="section">   
        <Main />
      </div>
      <div className="section">
        <About /> 
      </div>
    </div>
  );
}

export default App;
