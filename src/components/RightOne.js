
import React from 'react';
import { Link } from 'react-router-dom';
import soa from '../images/soa@2x.png';
import Right_two from './Right_two';


function RightOne() {
 
  
  return (
      <> 
      
    <div className="search-pic">
    <Link to="/two">
          <img src={soa} alt=""/>
          </Link>
          <h3 className="text-muted text-center my-2">welcome to the</h3>
          
          <h2 className="  text-muted text-center" >Strategic Opportunaty Assessment</h2>
    </div>
    


    </>
  )
}

export default RightOne