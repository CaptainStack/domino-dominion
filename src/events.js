import { store } from './index';

export const capitalizeButtonClicked = event => {
  store.dispatch({ type: 'CAPITALIZE_TITLE' });
}
