import { createStore, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import { girlReducer } from './modules/Girl';

// const loggerMiddleware = createLogger();
// 
// const createStoreWithMiddleware = applyMiddleware(
//   loggerMiddleware
// )(createStore);

const rootReducer = combineReducers({
  girlReducer,
});

// export const configureStore = (initialState = {}) => createStoreWithMiddleware(
export const configureStore = (initialState = {}) => createStore(
  rootReducer,
  initialState
);
