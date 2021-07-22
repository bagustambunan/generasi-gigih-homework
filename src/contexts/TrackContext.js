import React, { createContext, useReducer, useContext } from "react";

export const TrackContext = createContext();

// Initial state
const initialItems = [
  
];

// Actions
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const CLEAR_ALL = "CLEAR_ALL";

// Action creators
export function addTrack(text) {
  return { type: ADD_TRACK, text };
}

export function removeTrack(index) {
  return { type: REMOVE_TRACK, index };
}

export function clearAll() {
  return { type: CLEAR_ALL };
}

// Reducer
export function trackReducer(state, action) {
  switch (action.type) {
    case ADD_TRACK:
      return [...state, action.text];
    case REMOVE_TRACK:
      const copy = [...state];
      copy.splice(action.index, 1);
      return copy;
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
}

function TrackProvider(props) {
  const [items, dispatch] = useReducer(trackReducer, initialItems);

  const trackData = { items, dispatch };

  return <TrackContext.Provider value={trackData} {...props} />;
}

function useTrackContext() {
  return useContext(TrackContext);
}

export { TrackProvider, useTrackContext };