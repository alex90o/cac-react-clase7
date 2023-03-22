import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clase 7 Primer App React Alexis Cabrera 2023
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
        Links
        </p>
        <a
          className="App-link"
          href="https://github.com/alex90o/cac-react-clase7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link de Repositorio
        </a>
        <a
          className="App-link"
          href="https://alex90o.github.io/cac-react-clase7/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Host
        </a>

        
      </header>
    </div>
  );
}

export default App;
