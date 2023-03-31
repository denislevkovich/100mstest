import { useVideo } from "@100mslive/react-sdk";

const PeerUI = ({ peer }) =>  {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  return (
    <div className="peer-container">
      {!peer.isLocal&&<video
        ref={videoRef}
        className={`peer-video ${!peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />}
    </div>
  );
}

export default PeerUI;