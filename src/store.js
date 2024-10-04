import { createContext, useContext, useEffect, useState } from "react";

export function createStore(initialState) {
  let state = {
    ...initialState,
  };

  const listeners = new Set();

  function subscribe(listener) {
    listeners.add(listener);
  }

  function unsubscribe(listener) {
    listeners.delete(listener);
  }

  function setState(newState) {
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener(state));
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    unsubscribe,
    setState,
    getState,
  };
}

const StoreContext = createContext();
export const StoreProvider = StoreContext.Provider;

export function useSelector(selectorFn) {
  const {
    subscribe,
    unsubscribe,
    setState,
    getState
  } = useContext(StoreContext);

  const state = getState();
  const selectedState = selectorFn(state);
  const [stateSlice, setStateSlice] = useState(selectedState);

  useEffect(() => {
    const listener = (updatedState) => {
      const updatedStateSlice = selectorFn(updatedState);
      setStateSlice(updatedStateSlice);
    };

    subscribe(listener);

    return () => {
      unsubscribe(listener);
    };
  }, [selectorFn, subscribe, unsubscribe]);

  return [stateSlice, setState];
}
