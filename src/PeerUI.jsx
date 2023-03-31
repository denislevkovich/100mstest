  import { useVideo, useDevices } from "@100mslive/react-sdk";
  import Grid from "@mui/material/Grid";
  import { Typography } from "@mui/material";


  const PeerUI = ({ peer }) =>  {

    const { allDevices, selectedDeviceIDs, updateDevice } = useDevices();
    const { videoInput, audioInput, audioOutput } = allDevices;
    const { videoRef } = useVideo({
      trackId: peer.videoTrack
    });

    const handleDevicesChange = (e) => {
      console.log(e.target.value);
    }

    return (
      <Grid container p={1}>
        <Grid item xs={12}>
          <div >
            {!peer.isLocal&&
            <video
              ref={videoRef}
              className={`peer-video ${!peer.isLocal ? "local" : ""}`}
              autoPlay
              muted
              playsInline
            />}
          </div>
        </Grid>
      </Grid>
    );
  }

  export default PeerUI;