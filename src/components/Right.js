import React from 'react'
import RightOne from './RightOne';
import Right_two from './Right_two';
import Right_three from './Right_three';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VerticalLinearStepper from './VerticalLinearStepper';
import Popup from "./Popup";



function Right() {
  return (
    <>
      <Router>
   
   <Switch>
  
 
   <Route exact path="/">
       <RightOne/>
   </Route>
     <Route path="/two">
         <Right_two/>
   </Route>
   <Route path="/three">
         <Right_three/>
   </Route>
   <Route path="/stepper">
         <VerticalLinearStepper/>
   </Route>
   <Route path="/popup">
         <Popup/>
   </Route>
  
   
   
   </Switch>
  

</Router>
   
    </>
  )
}

export default Right