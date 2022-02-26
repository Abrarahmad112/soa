import React from 'react';
import headImg from '../images/haul (1)asdfa.png';
import traffic from '../images/traffic-icon.png';
import all from '../images/throughput.png';
import botal from '../images/bottleneck-assesment@2x.png';
import target from '../images/opportunity.png';
import { Link } from 'react-router-dom';
import { FaChevronRight} from "react-icons/fa";



function Left() {
  return (
   <>
  <div className='d-flex mt-2 header'>
      <img src={headImg} alt="" />
      <h4 className='mt-3 text-muted'>Strategic opportunaty assessment</h4>
     </div>
     <h2 className=''>ABC Company Pvt.Ltd.</h2> 
     <hr/>
     {/* first box_left */} 
     <div className="side-section-2 my-md-2 active_box" >
        <img src={traffic}  alt=""/>
        <h5>Traffic Zone</h5>
       
    </div>
      {/* first box_second */}
      <div className="side-section-2 my-md-2" >
        <img src={all}  alt=""/>
        <h5>All Over through put(in tons)</h5>
        <FaChevronRight className='arrow_left'/>
    </div>
      {/* first box_third */}
      <div className="side-section-2 my-md-2" >
        <img src={botal}  alt=""/>
        <h5>Bottneck assessments</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaChevronRight className='arrow_left'/>
    </div>
      {/* first box_fourth */}
      <div className="side-section-2 my-md-2" >
        <img src={target}  alt=""/>
        <h5>Opportunaty assessments</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaChevronRight className='arrow_left'/>
    </div>
    {/* button */}
    <button class="btn btn-primary ">Generate Reports </button>


   </>
  )
}

export default Left