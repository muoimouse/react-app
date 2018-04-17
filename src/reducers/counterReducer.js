import { INCREASE } from '../constants/ActionTypes';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    default:
      return state;
  }
};
