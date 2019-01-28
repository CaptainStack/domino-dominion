let TileData = (id, row, column, content, status) => ({ id: id, row: row, column: column, content: content, status: status })

export const initialize_board = (state) => {
  let board = state.board;
  let id = 0;
  for (let row = 0; row < state.board.dimensions.rows; row++) {
    for (let column = 0; column < state.board.dimensions.columns; column++) {
      board.tiles.push(TileData(id, row, column, null, "potential"));
      id++;
    }
  }
  state.board = board;
  return state;
}
