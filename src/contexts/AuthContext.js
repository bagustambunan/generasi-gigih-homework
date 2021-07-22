import React, { createContext, useReducer, useContext } from "react";

export const AuthContext = createContext();

// Initial state
const initialItems = null;

// Actions
export const ADD_AUTH = "ADD_AUTH";
export const CLEAR_AUTH = "CLEAR_AUTH";

// Action creators
export function addAuth(text) {
  return { type: ADD_AUTH, text };
}

export function clearAuth() {
  return { type: CLEAR_AUTH };
}

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case ADD_AUTH:
      return action.text;
    case CLEAR_AUTH:
      return null;
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [auth_store, dispatch_auth] = useReducer(authReducer, initialItems);

  const authData = { auth_store, dispatch_auth };

  return <AuthContext.Provider value={authData} {...props} />;
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };