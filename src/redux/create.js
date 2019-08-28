import { createStore, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import { GirlReducer } from './modules/Girl';

// const loggerMiddleware = createLogger();
// 
// const createStoreWithMiddleware = applyMiddleware(
//   loggerMiddleware
// )(createStore);

const rootReducer = combineReducers({
  GirlReducer,
});

// export const configureStore = (initialState = {}) => createStoreWithMiddleware(
export const configureStore = (initialState = {}) => createStore(
  rootReducer,
  initialState
);
