import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FcRight } from "react-icons/fc";
import Right_two from './Right_two';



function Right_three() {
  return (
  <>
 {/* <ArrowBackIcon/> */}
 <Link to="./two">
<FaArrowCircleLeft style={{fontSize:"30px", paddingLeft:"5px",color:"gray"}}/></Link>
 <Box className='stapper'>
   <span>Location One</span><FcRight/>
   <span>Location two</span><FcRight/>
   <span>Location three</span><FcRight/>
   <span>Location four</span>
 </Box>
 {/* box one start */}
  <Box className='box_container_2'  display="flex" p={2} bgcolor="background.paper">
  {/* left colmn start */}
  <div className='january'>
  {/* first line */}
      <Box >
        <Box  >
        <spain className="link_weak_2"> January</spain>
        </Box>
        <Box>
        <spain className="link_weak">Weak link: </spain>
        </Box>
        <Box>
        <spain className="">Location one location two </spain>
        </Box>
        <hr/>
      </Box>
      {/* second line */}
      <Box >
       
        <Box>
        <spain className="link_weak">Current capacity :</spain>
        </Box>
        <Box>
        <spain className="">10 Tons</spain>
        </Box>
        <hr/>
      </Box>
    
      {/* third line */}
      <Box >
       
       <Box>
       <spain className="link_weak">Proposed capacity :</spain>
       </Box>
       <Box>
       <spain className="">40 Tons</spain>
       </Box>
      
     </Box>
    {/* left colmn end */}
    </div>
    

 {/* right colmn */}

      <div className='january-2'>
     
      <Box  p={1}  >
      <Link to="./popup">
        <Button variant="contained" color="primary" >
            Graphic
           </Button>
        </Link>
      </Box>
      <Box >
      <Box p={1}  >
         <spain className="link_weak">Load Type :</spain>
        </Box>
        <Box p={1}  >
         <spain className="">XYZ</spain>
        </Box>
      
        <Box p={1}  >
         <spain className="link_weak">Profitability :</spain>
        </Box>
        <Box p={1}  >
         <spain className="">XYZ</spain>
        </Box>
        
      </Box>
      </div>
    </Box>
    {/* right colmn  end*/}
  {/* box one end  */}


  {/* box two strat */}
  <Box className='box_container_2'  display="flex" p={2} bgcolor="background.paper">
  {/* left colmn start */}
  <div className='january'>
  {/* first line */}
      <Box >
        <Box  >
        <spain className="link_weak_2"> January</spain>
        </Box>
        <Box>
        <spain className="link_weak">Weak link: </spain>
        </Box>
        <Box>
        <spain className="">Location one location two </spain>
        </Box>
        <hr/>
      </Box>
      {/* second line */}
      <Box >
       
        <Box>
        <spain className="link_weak">Current capacity :</spain>
        </Box>
        <Box>
        <spain className="">10 Tons</spain>
        </Box>
        <hr/>
      </Box>
    
      {/* third line */}
      <Box >
       
       <Box>
       <spain className="link_weak">Proposed capacity :</spain>
       </Box>
       <Box>
       <spain className="">40 Tons</spain>
       </Box>
      
     </Box>
    
    </div>
    {/* left colmn end */}

 {/* right colmn */}

      <div className='january-2'>
     
      <Box  p={1}  >
        <Button variant="contained" color="primary" >
            Graphic
           </Button>
      </Box>
      <Box >
      <Box p={1}  >
         <spain className="link_weak">Load Type :</spain>
        </Box>
        <Box p={1}  >
         <spain className="">XYZ</spain>
        </Box>
      
        <Box p={1}  >
         <spain className="link_weak">Profitability :</spain>
        </Box>
        <Box p={1}  >
         <spain className="">XYZ</spain>
        </Box>
        
      </Box>
      </div>
    </Box>
  {/* box two end */}

  </>
  )
}

export default Right_three