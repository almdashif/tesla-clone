// src/store/index.ts

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carReducer from "./slices/carSlice";

import {
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// 🔥 only persist car slice
const rootReducer = combineReducers({
  car: carReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["car"], // 👈 only this slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // required for redux-persist
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

// types
export type AppStore = ReturnType<typeof makeStore>["store"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];