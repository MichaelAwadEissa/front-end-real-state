// // reducers/watchlistReducer.js
// const initialState = {
//   watchlist: []
// };

// const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';

// const watchlistReducer = (state = initialState, action) => {
//   switch (action.type) {
//       case ADD_TO_WATCHLIST:
//           return {
//               ...state,
//               watchlist: [...state.watchlist, action.payload]
//           };
//       default:
//           return state;
//   }
// };

// export default watchlistReducer;

import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/watchlist';

const initialState = {
  watchlist: []
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      // Avoid duplicates
      if (state.watchlist.some(movie => movie.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
      };
    default:
      return state;
  }
};

export default watchlistReducer;

