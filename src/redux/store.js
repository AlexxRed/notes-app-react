import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { notesReducer } from './notesSlice';


export const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ),logger]
});

export const persistor = persistStore(store);