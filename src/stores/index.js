import { createStore } from 'redux';
import reducers from '../reducers';

module.exports = function(initialState, middleware) {
  const store = createStore(reducers, initialState, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
