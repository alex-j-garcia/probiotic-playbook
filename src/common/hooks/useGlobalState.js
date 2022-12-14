import useJsonData from './useJsonData';
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';

const StateContext = createContext();
const reducer = function (state, { type, payload }) {
  switch(type) {
    case 'ADD_TO_TRIAGE':
      return {
        ...state,
        triage: [...state.triage, payload],
      };
    case 'REMOVE_FROM_TRIAGE':
      return {
        ...state,
        triage: state.triage.filter(({ name }) => name !== payload.name),
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };
    case 'SET_MODAL_LIST':
      return {
        ...state,
        modalList: payload,
      };
    case 'REMOVE_FROM_MODAL_LIST':
      return {
        ...state,
        modalList: state.modalList.filter(item => item.name !== payload.name),
      };
    case 'ADD_TO_IMPROVE':
      return {
        ...state,
        toImprove: [...state.toImprove, payload],
      };
    case 'ADD_TO_GOING_WELL':
      return {
        ...state,
        goingWell: [...state.goingWell, payload],
      };
    case 'ADD_TO_IN_PROGRESS':
      return {
        ...state,
        inProgress: [...state.inProgress, payload],
      };
    case 'REMOVE_FROM_IN_PROGRESS':
      return {
        ...state,
        inProgress: state.inProgress.filter(item => item.id !== payload.id),
      };
    case 'REMOVE_FROM_GOING_WELL':
      return {
        ...state,
        goingWell: state.goingWell.filter(item => item.id !== payload.id),
      };
    case 'REMOVE_FROM_TO_IMPROVE':
      return {
        ...state,
        toImprove: state.toImprove.filter(item => item.id !== payload.id),
      };
    default:
      return state;
  }
}
const initialState = {
  modalIsVisible: false,
  triage: [],
  bugBoard: [],
  toImprove: [],
  goingWell: [],
  inProgress: [],
  modalList: null,
};

function StateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useJsonData();

  useEffect(() => {
    dispatch({ type: 'SET_MODAL_LIST', payload: data });
  }, [data]);

  const handlers = {
    addToTriage: (item) =>
      dispatch({ type: 'ADD_TO_TRIAGE', payload: item }),
    removeFromTriage: (item) =>
      dispatch({ type: 'REMOVE_FROM_TRIAGE', payload: item }),
    toggleIsVisible: () =>
      dispatch({ type: 'TOGGLE_MODAL' }),
    removeFromModalList: (item) =>
      dispatch({ type: 'REMOVE_FROM_MODAL_LIST', payload: item }),
    addToImprove: (item) =>
      dispatch({ type: 'ADD_TO_IMPROVE', payload: item }),
    addToGoingWell: (item) =>
      dispatch({ type: 'ADD_TO_GOING_WELL', payload: item }),
    addToInProgress: (item) =>
      dispatch({ type: 'ADD_TO_IN_PROGRESS', payload: item }),
    removeFromToImprove: (item) =>
      dispatch({ type: 'REMOVE_FROM_TO_IMPROVE', payload: item }),
    removeFromGoingWell: (item) =>
      dispatch({ type: 'REMOVE_FROM_GOING_WELL', payload: item }),
    removeFromInProgress: (item) =>
      dispatch({ type: 'REMOVE_FROM_IN_PROGRESS', payload: item }),
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
