import React from 'react';
import '../styles/Tile.css';

export const Tile = ({tile, occupied, impossible, possible, legal}) => {
  let get_border_color = () => {
    if (occupied) {
      return "black";
    } else if (possible) {
      return "lighgrey";
    } else {
      return "grey";
    }
  }
  return (
    <div className="Tile" key={ tile.id }
         style={{ borderColor: get_border_color()}}> 
      { tile.content ? "c" : null }
    </div>
  );
}

export default Tile;
