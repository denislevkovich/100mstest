import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import './App.css';

import JoinForm from './JoinForm';
import { useEffect } from 'react';


const App = () => {

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);
  return (
    <div className="App">
      {!isConnected&&<JoinForm />}
      {isConnected&&<div>Connected</div>}
    </div>
  );
}

export default App;
