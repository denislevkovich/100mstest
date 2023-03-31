import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import './App.css';

import JoinForm from './JoinForm';
import { useEffect } from 'react';
import BridgeUI from './BridgeUI';


const App = () => {

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected){hmsActions.leave();}  
    };
  }, [hmsActions, isConnected]);
  return (
    <div className="App">
      {isConnected?<BridgeUI/>:<JoinForm />}
    </div>
  );
}

export default App;
