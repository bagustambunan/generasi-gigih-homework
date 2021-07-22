import React, { createContext, useReducer, useContext } from "react";

export const UserContext = createContext();

// Initial state
const initialItems = null;

// Actions
export const ADD_USER = "ADD_USER";
export const CLEAR_USER = "CLEAR_USER";

// Action creators
export function addUser(text) {
  return { type: ADD_USER, text };
}

export function clearUser() {
  return { type: CLEAR_USER };
}

// Reducer
export function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return action.text;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
}

function UserProvider(props) {
  const [user_store, dispatch_user] = useReducer(userReducer, initialItems);

  const userData = { user_store, dispatch_user };

  return <UserContext.Provider value={userData} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}

export { UserProvider, useUserContext };