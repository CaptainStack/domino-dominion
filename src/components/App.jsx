import React from 'react';
import '../styles/App.css';
import { newGameButtonClicked } from '../events';
import { Board } from './Board';

export const App = ({state}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          { state.title }
        </h1>
        <Board board={state.board}/>
        <button onMouseDown={newGameButtonClicked}>
          5x5
        </button>
      </header>
    </div>
  );
}

export default App;
