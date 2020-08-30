import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Main } from './src/views';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Main/>
    </PersistGate>
  </Provider>
);
