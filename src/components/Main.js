import React from 'react'
import Grid from '@material-ui/core/Grid';
import Left from './Left';
import Right from './Right';
import RightOne from './RightOne';




function Main() {
 
  return (
   <>
  
    <Grid container >
            <Grid item md={6} >
                <Left/>
            </Grid>
            <Grid item md={6} className="right_container">
                  <Right/>
            </Grid>

      </Grid>
   </>
  )
}

export default Main