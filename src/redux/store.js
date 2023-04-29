import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import AuthSlice from "./auth/authSlice";
import UserSlice from "./users/usersSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};
const settingsPersistConfig = {
  key: "settings",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, AuthSlice),
    users: persistReducer(userPersistConfig, UserSlice),
    // settings: persistReducer(settingsPersistConfig),
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
