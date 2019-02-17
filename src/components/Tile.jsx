import React from 'react';
import '../styles/Tile.css';
import { TERRAIN } from '../initial_state';
import { tileClicked } from '../events';

export const Tile = ({tile, occupied, impossible, possible, legal}) => {
  let get_border_color = () => {
    if (occupied) {
      return get_background_color();
    } else if (possible) {
      return "#d3d3d3";
    } else {
      return "white";
    }
  }

  let get_background_color = () => {
    switch(tile.content) {
      case TERRAIN.empty:
        return "white";
      case TERRAIN.castle:
        return "lightpink";
      case TERRAIN.wheat:
        return "#E7B928";
      case TERRAIN.forest:
        return "#314919";
      case TERRAIN.lake:
        return "#278DD5";
      case TERRAIN.meadow:
        return "#8E9C2D";
      case TERRAIN.swamp:
        return "#B19A7A";
      case TERRAIN.mine:
        return "#3D2B27";
      default:
        return "transparent";
    }
  }
  return (
    <div className="Tile" key={ tile.id }
         onMouseDown={ tileClicked(tile) }
         style={{ borderColor: get_border_color(),
                  backgroundColor: get_background_color()
         }}> 

    </div>
  );
}

export default Tile;
