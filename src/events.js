import { store } from './index';

export const newGameButtonClicked = event => {
  store.dispatch({ type: 'INITIALIZE_BOARD' });
}
