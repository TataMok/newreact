import Weather from './weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          My React app
        </h1>
       <Weather city="Tokio" />
      </header>
    </div>
  );
}

export default App;
