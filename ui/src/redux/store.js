import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'

import cartReducer from './cartSlice'
import userReducer from './userSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	// reducer: {
	// 	cart: cartReducer,
	// 	user: persistedReducer,
	// },
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export let persistor = persistStore(store)