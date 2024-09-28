// 
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './reducers/combine_reducer'; // Ensure the correct path

const MyStore = createStore(combineReducer, composeWithDevTools());

export default MyStore;
