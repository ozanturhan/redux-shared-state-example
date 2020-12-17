import React, { createContext, useReducer, useContext } from 'react';
import reducers from './reducers';
export const StateContext = createContext();

export const initialState = {
  searchText: '',
}

export const GlobalStateProvider =  ({ children, initialState: receivedState }) => {
  return <StateContext.Provider value={useReducer(reducers, initialState)}>{children}</StateContext.Provider>;
}

export const useGlobalState = () => useContext(StateContext);
