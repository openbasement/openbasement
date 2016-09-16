import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import T from 'i18n-react';

import PersistentStore from './persistence/PersistentStore';
import locale from './i18n/locales/en-US';
import App from './containers/App';

const store = PersistentStore();

T.setTexts(locale);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
