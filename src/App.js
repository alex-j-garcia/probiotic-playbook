import { ModalContextProvider } from './modules/common/useModalContext';
import Overlay from './modules/common/Overlay';
import BugModal from './modules/dashboard/components/BugModal';
import Dashboard from './modules/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <ModalContextProvider defaultOnValue={false}>
      <Overlay>
        <BugModal />
      </Overlay>
      <Dashboard />
    </ModalContextProvider>
  );
}

export default App;
