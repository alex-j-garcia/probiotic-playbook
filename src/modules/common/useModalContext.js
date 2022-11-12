import {
  useState,
  createContext,
  useContext
} from 'react';

const ModalContext = createContext();

function ModalContextProvider({
  defaultOnValue = false,
  children,
}) {
  const [isVisible, setIsVisible] = useState(defaultOnValue);

  function toggleIsVisible() {
    setIsVisible(prev => !prev);
  }

  return (
    <ModalContext.Provider value={{ isVisible, toggleIsVisible }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  return useContext(ModalContext);
}

export {
  ModalContextProvider,
  useModalContext,
}
