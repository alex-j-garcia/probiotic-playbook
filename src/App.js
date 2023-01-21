import { StateContextProvider } from './common/hooks/useGlobalState';
import Overlay from './common/components/Overlay';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <StateContextProvider>
      <Overlay />
      <Dashboard />
    </StateContextProvider>
  );
}

export default App;
