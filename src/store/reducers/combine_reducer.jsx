// reducers/combineReducer.js
import { combineReducers } from 'redux';
import LangReducer from './lang_reducer'; // Adjust path if needed
import ThemeReducer from './theme_reducer'; // Adjust path if needed
import WatchlistReducer from './Watchlist_reducer'; // Adjust path if needed

const rootReducer = combineReducers({
    myLang: LangReducer,
    myTheme: ThemeReducer,
    watchlist: WatchlistReducer
});

export default rootReducer;
