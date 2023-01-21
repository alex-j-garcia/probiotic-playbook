import useJsonData from './useJsonData';
import { createContext, useContext, useReducer, } from 'react';

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
    case 'SHOW_OVERLAY':
      return {
        ...state,
        overlayIsVisible: true,
      };
    case 'HIDE_OVERLAY':
      return {
        ...state,
        overlayIsVisible: false,
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
    case 'ADD_DRAG_TARGET':
      return {
        ...state,
        dragTarget: payload,
      };
    case 'REMOVE_DRAG_TARGET':
      return {
        ...state,
        dragTarget: null,
      }
    case 'SET_MODAL_CONTENT':
      return {
        ...state,
        modalContent: payload,
      };
    case 'SET_BUG_DETAILS_CONTENT':
      return {
        ...state,
        bugDetailsContent: payload,
      };
    default:
      return state;
  }
}

const initialState = {
  overlayIsVisible: false,
  triage: [],
  bugBoard: [],
  toImprove: [],
  goingWell: [],
  inProgress: [],
  dragTarget: null,
  modalContent: null,
  bugDetailsContent: null,
};

function StateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useJsonData();

  const handlers = {
    addToTriage: (item) =>
      dispatch({ type: 'ADD_TO_TRIAGE', payload: item }),
    removeFromTriage: (item) =>
      dispatch({ type: 'REMOVE_FROM_TRIAGE', payload: item }),
    showOverlay: () =>
      dispatch({ type: 'SHOW_OVERLAY', }),
    hideOverlay: () =>
      dispatch({ type: 'HIDE_OVERLAY', }),
    removeFromModalList: (item) =>
      setData(prevData => prevData.filter(element => element.id !== item.id)),
    addToImprove: (item) => {
      const doesExist = state.toImprove.some(
        element => element.id === item.id
      );
      if (doesExist) {
        return;
      }
      dispatch({ type: 'ADD_TO_IMPROVE', payload: item });
    },
    addToGoingWell: (item) => {
      const doesExist = state.goingWell.some(
        element => element.id === item.id
      );
      if (doesExist) {
        return;
      }
      dispatch({ type: 'ADD_TO_GOING_WELL', payload: item });
    },
    addToInProgress: (item) => {
      const doesExist = state.inProgress.some(
        element => element.id === item.id
      );
      if (doesExist) {
        return;
      }
      dispatch({ type: 'ADD_TO_IN_PROGRESS', payload: item });
    },
    removeFromToImprove: (item) =>
      dispatch({ type: 'REMOVE_FROM_TO_IMPROVE', payload: item }),
    removeFromGoingWell: (item) =>
      dispatch({ type: 'REMOVE_FROM_GOING_WELL', payload: item }),
    removeFromInProgress: (item) =>
      dispatch({ type: 'REMOVE_FROM_IN_PROGRESS', payload: item }),
    addDragTarget: (item) =>
      dispatch({ type: 'ADD_DRAG_TARGET', payload: item }),
    removeDragTarget: () =>
      dispatch({ type: 'REMOVE_DRAG_TARGET', }),
    setModalContent: (componentName) =>
      dispatch({ type: 'SET_MODAL_CONTENT', payload: componentName }),
    setBugDetailsContent: (item) =>
      dispatch({ type: 'SET_BUG_DETAILS_CONTENT', payload: item }),
  };

  return (
    <StateContext.Provider value={{
      state: {
        ...state,
        modalList: data
      },
      handlers,
    }}>
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
