import { StateContextProvider } from './modules/common/useGlobalState';
import Overlay from './modules/common/Overlay';
import BugModal from './modules/dashboard/components/BugModal';
import Dashboard from './modules/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <StateContextProvider>
      <Overlay>
        <BugModal />
      </Overlay>
      <Dashboard />
    </StateContextProvider>
  );
}

export default App;
