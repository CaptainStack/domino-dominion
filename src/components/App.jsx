import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { capitalizeButtonClicked } from '../events';

export const App = ({state}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { state.title }
        </p>
        <button onMouseDown={capitalizeButtonClicked}>
          Capitalize
        </button>
      </header>
    </div>
  );
}

export default App;
