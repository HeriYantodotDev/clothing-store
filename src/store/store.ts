import { compose, createStore, applyMiddleware, Middleware } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next();
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  const result = next(action);

  console.log('next state: ', store.getState());

  return result;
};

const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
