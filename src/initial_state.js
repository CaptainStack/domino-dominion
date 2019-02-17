
export const TERRAIN = {
  castle: 0,
  empty: 1,
  wheat: 2,
  forest: 3,
  lake: 4,
  meadow: 5,
  swamp: 6,
  mine: 7,
}

let occupied_tiles =
  function() {
    let occupied_tiles = [];
    for (let tile of this.tiles) {
      if (tile.content !== TERRAIN.empty) {
        occupied_tiles.push(tile);
      }
    }
    return occupied_tiles;
  }

let possible_tiles =
  function() {
    let lowest_row_index = 100;
    let highest_row_index = -100;
    let lowest_column_index = 100;
    let highest_column_index = -100;

    for (let tile of this.occupied_tiles()) {
      if (tile.row < lowest_row_index) {
        lowest_row_index = tile.row;
      }
      if (tile.row > highest_row_index) {
        highest_row_index = tile.row;
      }
      if (tile.column < lowest_column_index) {
        lowest_column_index = tile.column;
      }
      if (tile.column > highest_column_index) {
        highest_column_index = tile.column;
      }
    }

    let possible_tiles = [];
    for (let tile of this.tiles) {
      if ((Math.abs(tile.row - lowest_row_index) < 5) && (Math.abs(tile.row - highest_row_index) < 5) &&
          (Math.abs(tile.column - lowest_column_index) < 5) && (Math.abs(tile.column - highest_column_index) < 5)) {
        possible_tiles.push(tile);
      }
    }
    return possible_tiles;
  }



export const INITIAL_STATE =
{
  title: "Domino Dominion",
  board: {
    dimensions: { rows: 9, columns: 9 },
    tiles: [],
    occupied_tiles: occupied_tiles,
    legal_tiles: [],
    possible_tiles: possible_tiles,
    impossible_tiles: [],
  }
}
