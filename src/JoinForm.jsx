import { useState } from "react";
import { useHMSActions} from "@100mslive/react-sdk";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";



function JoinForm() {

  const hmsActions = useHMSActions();
  const [userName, setUserName] = useState('Participant');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2NDI2NDlhODBlMDc3NjQ5ODQ1YmUwZjQiLCJyb2xlIjoiaG9zdCIsInJvb21faWQiOiI2NDI2ZGFjOGIzNDkyZjcyY2ZjNWIzM2UiLCJ1c2VyX2lkIjoiNGE1ODdhYzktNGI2NS00NWFhLWJkZjEtNWRjYzkwOGIyYmMzIiwiZXhwIjoxNjgwNTMwMDMwLCJqdGkiOiIxZDhiMjRlZi0yNzFhLTQxNDMtOWM5Yy00NzJhYzIwN2YxNDYiLCJpYXQiOjE2ODA0NDM2MzAsImlzcyI6IjY0MjY0OWE4MGUwNzc2NDk4NDViZTBmMiIsIm5iZiI6MTY4MDQ0MzYzMCwic3ViIjoiYXBpIn0.k0paBPTGVFijikXLAKkk4YEHwPFW-lRKKKzxVAR9yZ0'
  
    try { 
      await hmsActions.join({ userName , authToken: tempToken});
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit}>
        <Typography color={"whitesmoke"} variant="h2" component="h2" p={4}>
          NY-Beijing Video Bridge
        </Typography>;
        <Button type="submit" variant="outlined" sx={{ width:10, py:2, px:5, color:"whitesmoke", borderColor: "whitesmoke"}} >Join</Button>
      </form>
    </Box>
  );
}

export default JoinForm;