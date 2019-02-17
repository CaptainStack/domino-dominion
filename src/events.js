import { store } from './index';

export const newGameButtonClicked = event => {
  store.dispatch({ type: 'INITIALIZE_BOARD' });
}

export const tileClicked = clicked_tile => event => {
  store.dispatch({ type: 'ADVANCE_CONTENT', tile: clicked_tile });
}
