import { selectPeers, useHMSStore, useDevices, DeviceType } from "@100mslive/react-sdk";


import React from "react";
import PeerUI from "./PeerUI.jsx";

const BridgeUI = () => {  
  const peers = useHMSStore(selectPeers);
  return (

    <div className="peers-section">
        {peers.map((peer) => (
          <PeerUI key={peer.id} peer={peer} />
        ))}
    </div>

    
  );
}

export default BridgeUI;