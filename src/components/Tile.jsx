import React from 'react';
import '../styles/Tile.css';

export const Tile = ({tile}) => {
  return (
    <div className="Tile" key={ tile.id }> 
      { tile.id } 
    </div>
  );
}

export default Tile;
