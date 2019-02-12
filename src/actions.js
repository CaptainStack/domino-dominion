let TileData = (id, row, column, content, status) => ({ id: id, row: row, column: column, content: content });

export const initialize_board = (state) => {
  let board = state.board;
  board.tiles = [];
  let id = 0;

  for (let row = 0; row < state.board.dimensions.rows; row++) {
    for (let column = 0; column < state.board.dimensions.columns; column++) {
      if (row === Math.floor(state.board.dimensions.rows / 2) && column === Math.floor(state.board.dimensions.columns / 2)) {
        board.tiles.push(TileData(id, row, column, "Castle"));
      } else {
        board.tiles.push(TileData(id, row, column, null));
      }
      id++;
    }
  }

  state.board = board;
  return state;
}
