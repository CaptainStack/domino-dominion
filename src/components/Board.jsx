import React from 'react';
import '../styles/Board.css';
import { Tile } from './Tile';

export const Board = ({board}) => {
  let tiles = board.tiles.map(tile => 
    <Tile tile = { tile } 
          occupied={ board.occupied_tiles().includes(tile)}
          possible={ board.possible_tiles().includes(tile)}/>);

  return (
    <div className="Board" style={{
      gridTemplateColumns: `repeat(${ board.dimensions.columns }, 40px)`,
      gridTemplateRows: `repeat(${ board.dimensions.rows }, 40px)`,
    }}>
      { tiles }
    </div>
  );
}

export default Board;
