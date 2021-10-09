import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer.js";


let initialState = {
  watchList: [],
};

export const Context = createContext(initialState);

export const StateProvider = (props) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    const addToWatchList = (movie) => {
      dispatch({ type: "ADD__TO__WATCHLIST", payload: movie});
    };

    const removeFromWatchList = (id) => {
        dispatch({type: "REMOVE__FROM__WATCHLIST", payload: id});
    }

  return (
    <Context.Provider
      value={{
        watchList: state.watchList,
        addToWatchList: addToWatchList,
        removeFromWatchList: removeFromWatchList
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
