import React from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import hljs from 'highlight.js';
import { loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';

import createPersistentStore from './persistent-stores';
import { resetStoreAction } from './actions';
import translations from './i18n';
import App from './containers/App';

Modal.defaultStyles = {
  overlay: {},
  content: {}
};

const store = createPersistentStore();
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));

window.resetState = () => store.dispatch(resetStoreAction());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

hljs.initHighlighting();
