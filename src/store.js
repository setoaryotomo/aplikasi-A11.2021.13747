import { createStore } from 'redux';

// Initial State
const initialState = {
  name: 'Seto Aryotomo',
  nim: 'A11.2021.13747'
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_NIM':
      return { ...state, nim: action.payload };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
