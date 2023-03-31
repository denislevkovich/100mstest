import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import React from "react";
import PeerUI from "./PeerUI.jsx";

const BridgeUI = () => {
  const peers = useHMSStore(selectPeers);
  return (
    <div className="conference-section">
      <div className="peers-container">
        {peers.map((peer) => (
          <PeerUI key={peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
}

export default BridgeUI;