import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// custom slices
import authReducer from './slices/auth';

const authPersistStore = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
};

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      authPersistStore,
      authReducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
