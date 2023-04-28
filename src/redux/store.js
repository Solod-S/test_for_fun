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

import UserSlice from "./users/usersSlice";
import AuthSlice from "./auth/authSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, AuthSlice),
    users: persistReducer(userPersistConfig, UserSlice),
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
