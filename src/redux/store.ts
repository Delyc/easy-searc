import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import starterSlice from './reducers/starterSlice';
import { availableDocsSlice } from '@/services/docsApiSlice';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    starterSlice: starterSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: {
        persistedReducer,
        [availableDocsSlice.reducerPath]: availableDocsSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
        serializableCheck: false
    }).concat(availableDocsSlice.middleware).concat().concat(),
    // middleware: [thunk]
})
// setupListeners(store.dispatch)

export const persistor = persistStore(store)

