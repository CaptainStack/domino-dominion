import { store } from './index';
import { get_occupied_adjacent_tiles } from './initial_state'

export const newGameButtonClicked = event => {
  store.dispatch({ type: 'INITIALIZE_BOARD' });
}

export const tileClicked = clicked_tile => event => {
  if (get_occupied_adjacent_tiles(store.getState().board, clicked_tile).length > 0) {
    store.dispatch({ type: 'ADVANCE_CONTENT', tile: clicked_tile });
  }
}
