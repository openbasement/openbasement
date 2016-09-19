import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import T from 'i18n-react';
import hljs from 'highlight.js';

import PersistentStore from './persistence/PersistentStore';
import { RESET_STORE } from './actions/const';
import locale from './i18n/locales/en-US';
import App from './containers/App';

Modal.defaultStyles = {
  overlay: {},
  content: {}
};

const store = PersistentStore();

window.resetState = () => {
  store.dispatch({ type: RESET_STORE });
};

T.setTexts(locale);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

hljs.initHighlighting();
