import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer className='footer'>
         <p>&copy; 2022 - <a href="yoseph.dev">Yoseph Berhane</a>. All rights reserved.</p>       
      </footer>
    </div>
  );
}

export default App;
