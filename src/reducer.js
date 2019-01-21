import { INITIAL_STATE } from './initial_state';
import { capitalize_title } from './actions';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CAPITALIZE_TITLE':
      return capitalize_title(state);
    default:
      return state;
  }
}
