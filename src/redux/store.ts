import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import starterSlice from './reducers/starterSlice';
import { availableDocsSlice } from '@/services/docsApiSlice';
import { authApi } from '../services/admin/authService';
import authReducer from './reducers/authSlice';
import { orgDocSlice } from '@/services/admin/addDocSlice';
import { useDispatch } from 'react-redux'

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  starterSlice,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    auth: authReducer,
    [availableDocsSlice.reducerPath]: availableDocsSlice.reducer,
    [orgDocSlice.reducerPath]: orgDocSlice.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(availableDocsSlice.middleware, authApi.middleware, orgDocSlice.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const persistor = persistStore(store);
