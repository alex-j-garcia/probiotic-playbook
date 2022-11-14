import {
  createContext,
  useContext,
  useReducer
} from 'react';

const StateContext = createContext();

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TO_TRIAGE':
      return {
        ...state,
        triage: [...state.triage, action.payload],
      };
      case 'ADD_TO_BUG_BOARD':
        return {
          ...state,
          bugBoard: [...state.bugBoard, action.payload],
        };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };
    default:
      return state;
  }
}

function StateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    modalIsVisible: false,
    triage: [],
    bugBoard: [],
  });

  const handlers = {
    addToTriage: (item) => dispatch({ type: 'ADD_TO_TRIAGE', payload: item }),
    addToBugBoard: (item) => dispatch({ type: 'ADD_TO_BUG_BOARD', payload: item }),
    toggleIsVisible: () => dispatch({ type: 'TOGGLE_MODAL' }),
  };

  return (
    <StateContext.Provider value={{ state, handlers }}>
      {children}
    </StateContext.Provider>
  );
}

function useGlobalState() {
  const { state, handlers } = useContext(StateContext);
  return [state, handlers];
}

export {
  StateContextProvider,
  useGlobalState,
}
