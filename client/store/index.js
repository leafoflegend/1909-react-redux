import { createStore } from 'redux';
import {
  INCREMENT,
  DECREMENT,
} from './actions.js';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

window.store = store;

export default store;
