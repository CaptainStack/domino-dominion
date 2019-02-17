import { TERRAIN } from './initial_state';

let TileData = (id, row, column, content, status) => ({ id: id, row: row, column: column, content: content });

export const initialize_board = (state) => {
  let board = state.board;
  board.tiles = [];
  let id = 0;

  for (let row = 0; row < state.board.dimensions.rows; row++) {
    for (let column = 0; column < state.board.dimensions.columns; column++) {
      if (row === Math.floor(state.board.dimensions.rows / 2) && column === Math.floor(state.board.dimensions.columns / 2)) {
        board.tiles.push(TileData(id, row, column, TERRAIN.castle));
      } else {
        board.tiles.push(TileData(id, row, column, TERRAIN.empty));
      }
      id++;
    }
  }

  state.board = board;
  return state;
}

export const advance_content = (state, clicked_tile) => {
  if (clicked_tile.content !== TERRAIN.castle && state.board.possible_tiles().includes(clicked_tile)) {
    if (clicked_tile.content < 7) {
      clicked_tile.content += 1;
    } else {
      clicked_tile.content = TERRAIN.empty; 
    }
  }
  return state;
}
