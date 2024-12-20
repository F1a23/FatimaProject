import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Features/UserSlice";
import postReducer from "../Features/PostSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { combineReducers } from "redux";

import manageUserReducer from "../Features/ManageUserSlice";
import servicesReducer from "../Features/ServiceSlice";

import { reset as resetManageUser } from "../Features/ManageUserSlice";
const persistConfig = {
  key: "reduxstore", // The key to identify the persisted state in storage

  storage, // The storage method (localStorage)
};

const rootReducer = combineReducers({
  users: usersReducer, // Manage users slice of the state
  posts: postReducer,
  services: servicesReducer,
  // Manage posts slice of the state
  manageUsers: manageUserReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Use the persisted reducer in the store
});

const persistore = persistStore(store);
export { store, persistore };
