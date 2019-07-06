import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // folder called reducers -> file called index.js

const initialState = {}; // initial state will just be an empty object

const middleware = [thunk];

const store = createStore(
   rootReducer, 
   initialState, 
   composeWithDevTools(applyMiddleware (...middleware))
   );

export default store;