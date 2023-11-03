const { createStore } = require('redux');
const { contactsReducer } = require('./reducer');

export const store = createStore(
  contactsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
