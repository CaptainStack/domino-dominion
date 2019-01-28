import { INITIAL_STATE } from './initial_state';
import { initialize_board } from './actions';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INITIALIZE_BOARD':
      return initialize_board(state);
    default:
      return state;
  }
}
