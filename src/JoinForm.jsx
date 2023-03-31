import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";


function JoinForm() {
  //const endPoint = 'https://prod-in2.100ms.live/hmsapi/cri-fsn-p2p-video.app.100ms.live/' 
  const hmsActions = useHMSActions();
  const [userName, setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // use room code to fetch auth token
    
    //const resp = await hmsActions.getAuthTokenByRoomCode( {roomCode: 'cuc-rbbm-mqk', userId: userName}, endPoint);
    //const authToken = resp.token
    //console.log(`trying to join with user name ${userName} and token ${authToken}`);
    const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2NDI2NDlhODBlMDc3NjQ5ODQ1YmUwZjQiLCJyb2xlIjoiaG9zdCIsInJvb21faWQiOiI2NDI2ZGFjOGIzNDkyZjcyY2ZjNWIzM2UiLCJ1c2VyX2lkIjoiMDQ4ZjI2ZjEtM2RjMy00YTBlLWE2MjUtNmIzMzI2ZmRmN2JkIiwiZXhwIjoxNjgwMzU1MjAyLCJqdGkiOiI1MmIxMTZjOC1kMzU2LTQ1YjItOTlhYi1mNTJjZWM1YmRiZDAiLCJpYXQiOjE2ODAyNjg4MDIsImlzcyI6IjY0MjY0OWE4MGUwNzc2NDk4NDViZTBmMiIsIm5iZiI6MTY4MDI2ODgwMiwic3ViIjoiYXBpIn0.Om7x3sbif8OeBy2TzaYbWcm36kRXW2SexEZAXpZ7m64'
  
    try { 
      await hmsActions.join({ userName , authToken: tempToken});
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join NY-Beijing Transmission Bridge</h2>
      <div className="input-container">
        <input
          required
          value={userName}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Juilliard or Beijing"
        />
        </div>
       
      <button className="btn-primary" disabled={userName===""} >Join</button>
    </form>
  );
}

export default JoinForm;