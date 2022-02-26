import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FcRight } from "react-icons/fc";
import {FaTimesCircle } from "react-icons/fa";

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (

    <section>
            {/* box one start */}
                <Box className='box_container_3'  display="flex" p={2} bgcolor="background.paper">
                {/* colmn start */}
                <div className='loop'>
                {/* first line */}
                <Box >
                  <Box  >
                
                  <spain className="link_weak"> Loop</spain>
                  </Box>
                  <Box>
                  <spain className="">Location one <FcRight/>
                  location two <FcRight/>
                  location three <FcRight/>
                   location fourth </spain>
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
              <Box  p={1}   className="view_btn">
                <Link to="#">
                  <Button value="view" onClick={() => this.openModal()}  id ="view-btn"style={{width:"100px", borderRadius:"20px"}} variant="contained" color="primary" >
                      View
                    </Button>
                  </Link>
                </Box>
            
              </div>

              </Box>
              
  {/* box one end  */}
  {/* box tow start */}
        <Box className='box_container_3'  display="flex" p={2} bgcolor="background.paper">
        {/* colmn start */}
        <div className='loop'>
        {/* first line */}
            <Box >
              <Box  >
              <spain className="link_weak"> Loop</spain> 
              </Box>
              <Box>
                  <spain className="">Location one <FcRight/>
                  location two <FcRight/>
                  location three <FcRight/>
                   location fourth </spain>
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
          <Box  p={1}   className="view_btn">
            <Link to="./popup">
              <Button  value="view" onClick={() => this.openModal()} id ="view-btn"style={{width:"100px", borderRadius:"20px"}} variant="contained" color="primary" >
                  View
                </Button>
              </Link>
            </Box>
        
          </div>

    </Box>
  {/* popup start */}

                <Modal visible={this.state.visible} width="400" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='popup_box text-center'>
                    <div className="graph_box"></div>
                        <h3>Proposal:</h3>
                        <p>
                        Please increase 30 Tons from location B to location c from load famiily M N O in the month of January
                        </p>
                        <p> <b style={{color:"rosybrown"}}>M</b>
                         &nbsp; DD,FF,GG,HH
                        </p>
                        <p> <b style={{color:"rosybrown"}}>N</b> &nbsp;DD,FF,GG,HH</p>
                        <p> <b style={{color:"rosybrown"}}>O</b> &nbsp;DD,FF,GG,HH</p>

                        <a href="javascript:void(0);" onClick={() => this.closeModal()} id="close_btn"><FaTimesCircle style={{fontSize:"30px"}}/></a>
                        <Link to="./stepper">
                        <Button   id ="popup-btn"style={{width:"100px", borderRadius:"20px"}} variant="contained" color="primary" >
                        okay
                      </Button>
                      </Link>
                        
                    </div>
                </Modal>
       {/* popup end */}


    </section>
        );
    }
}