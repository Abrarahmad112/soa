import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



function Right_two() {

  return (
    <>
  <Box className='box_container'   p={2} bgcolor="background.paper">
  {/* first line */}
      <Box display="flex" >
        <Box p={1} >
        <spain className="tons_text"> CURRENT CAPACITY :</spain>
        </Box>
        <Box p={1} >
         <spain className="tons">10 Tons</spain>
        </Box>
      </Box>
      <hr/>
      {/* second line */}
      <Box display="flex" >
        <Box p={1}  >
        <spain className="tons_text">PROPOSED CAPACITY :  </spain>
        
        </Box>
        <Box p={1} >
         <spain  className="tons"> 111 Tons</spain>
        </Box>
      </Box>
      <hr/>
      {/* third line */}
      <Box display="flex" >
        <Box p={1}  m={1}>
         <spain className="tons_text">PROFITABILITY :</spain>
        </Box>
        <Box p={1}  m={1}>
          <spain  className="tons"> XYZ</spain>
        </Box>
      </Box>
    </Box>
    {/* button */}
    <Box  m={4} className='detals_btn'>
    <Link to="./three">
    <Button variant="contained" color="primary" >
            Details
           </Button>
        </Link>
    </Box>
            

   
  </>
  )
}

export default Right_two