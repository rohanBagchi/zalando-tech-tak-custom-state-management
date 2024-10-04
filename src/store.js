import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

export function createStore(initialState) {
  let state = {
    ...initialState,
  };

  const listeners = new Set();

  function subscribe(listener) {
    listeners.add(listener);

    return function unsubscribe() {
      listeners.delete(listener);
    }
  }

  function setState(newState) {
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener(state));
  }

  function getSnapshot() {
    return state;
  }

  return {
    subscribe,
    setState,
    getSnapshot,
  };
}

const StoreContext = createContext();
export const StoreProvider = StoreContext.Provider;

export function useSelector(selectorFn) {
  const {
    subscribe,
    setState,
    getSnapshot
  } = useContext(StoreContext);

  const currentStateSnapshot = getSnapshot();
  const selectedState = selectorFn(currentStateSnapshot);
  const [stateSlice, setStateSlice] = useState(selectedState);

  useEffect(() => {
    const listener = (updatedState) => {
      const updatedStateSlice = selectorFn(updatedState);
      setStateSlice(updatedStateSlice);
    };

    const unsubscribe = subscribe(listener);

    return () => {
      unsubscribe(listener);
    };
  }, [selectorFn, subscribe]);

  return [stateSlice, setState];
}