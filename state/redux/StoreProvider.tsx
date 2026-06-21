'use client'

import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
