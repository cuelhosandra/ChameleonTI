import './App.css';
import Main from './Main'
import About from './About'
// import Contact from './Contact';


function App() {
  return (
    <div className="App">    
       <div className="section">   
        <Main />
      </div>
      <div className="section">
        <About /> 
      </div>
      {/* <div className="section">
        <Contact/>
      </div> */}
    </div>
  );
}

export default App;
