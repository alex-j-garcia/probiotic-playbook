import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import useJsonData from './useJsonData';

const StateContext = createContext();

function reducer(state, { type , payload }) {
  switch(type) {
    case 'ADD_TO_TRIAGE':
      return {
        ...state,
        triage: [...state.triage, payload],
      };
    case 'REMOVE_FROM_TRIAGE':
      return {
        ...state,
        triage: state.triage.filter(({ name }) => name !== payload.item.name),
      };
    case 'ADD_TO_BUG_BOARD':
      return {
        ...state,
        bugBoard: [...state.bugBoard, payload],
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };
    case 'UPDATE_MODAL_LIST':
      return {
        ...state,
        modalList: [...payload],
      };
    default:
      return state;
  }
}

function StateContextProvider({ children }) {
  const data = useJsonData();
  const [state, dispatch] = useReducer(reducer, {
    modalIsVisible: false,
    triage: [],
    bugBoard: [],
    modalList: data,
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_MODAL_LIST', payload: data });
  }, [data]);

  const handlers = {
    addToTriage: (item) => 
      dispatch({ type: 'ADD_TO_TRIAGE', payload: item }),
    removeFromTriage: (item) => 
      dispatch({ type: 'REMOVE_FROM_TRIAGE', payload: item }),
    addToBugBoard: (item) => 
      dispatch({ type: 'ADD_TO_BUG_BOARD', payload: item }),
    toggleIsVisible: () => 
      dispatch({ type: 'TOGGLE_MODAL' }),
    updateModalList: (collection) => 
      dispatch({ type: 'UPDATE_MODAL_LIST', payload: collection }),
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
