import { INITIAL_STATE } from './initial_state';
import { initialize_board, advance_content } from './actions';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INITIALIZE_BOARD':
      return initialize_board(state);
    case 'ADVANCE_CONTENT':
      return advance_content(state, action.tile);
    default:
      return state;
  }
}
