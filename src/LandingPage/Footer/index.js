import React from "react";
// import { Progress } from "reactstrap";
// import "./App.css";
import { useHistory } from "react-router-dom";
// import AOS from "aos";
import { Row, Col } from "reactstrap";
import { NavLink } from "reactstrap";

import { 
  // AiFillTwitterCircle, 
  AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill, RiFacebookCircleFill, 
   } from "react-icons/ri";

import "./style.css";
function Footer(){
  // const history = useHistory()   

  return (
      <div
       
       className = "footer_body"
      >
        <Row>
          <Col sm={3}>
            <center>
              <b style={{ fontSize: "40px" }}>GIVI</b>
              <p>{
                // No:1 Car Traker Site
              }
                {// <br />
                // Finacial
              }
              </p>

            </center>

           
          </Col>

          <Col md={1}>
          </Col>

          <Col sm={3}>
            <div className="legal">
              <b>OUR SERVICE</b>
              <p />
              <p  style={{cursor : "pointer"}}>Pricing</p>
              <p  style={{cursor : "pointer"}}>Free Shipping</p>
              <p className="Pri">Newsletter</p>
              
            </div>
          </Col>

         
          <Col sm={5}>
            <b>FOLLOW US</b>
            <p />
            {// <div className="general">
            //   <p 
              
            //   >Email: chibestnuel@gmail.com</p>
            //   <p 
              
            //   >Phone: +2348100473127, +2348117131203</p>
            //   <p 
              
            //   >Location: Ayobo, Lagos State</p>              
            // </div>
          }
            

             <NavLink                
          href ="https://www.instagram.com/cnuel27"
          target="_blank" 
          style={{display : 'inline'}}
        >
             <AiFillInstagram style={{color : 'white'}} />
             </NavLink>
           
           <NavLink                
          href="https://www.linkedin.com/in/emmanuel-chidera-metu-a2548a113"
          target="_blank" 
          style={{display : 'inline'}}
        >
             <AiFillLinkedin style={{color : 'white'}} />
             </NavLink>
             

          
           
           <NavLink                          
          href="https://wa.me/c/2348117131203"
          target="_blank" 
          style={{display : 'inline'}}
        >
            <RiWhatsappFill style={{color : 'white'}}          
             className="mx-1"/>
             </NavLink>
             

            
           <NavLink
          // className="btn-icon-only rounded-circle ml-1"
          
          href="https://www.facebook.com/KingdomEncourager/"
          target="_blank" 
          style={{display : 'inline'}}
          // style={{padding : 0, border : 0, outline : 'none'}}
        >
            <RiFacebookCircleFill style={{color : 'white'}} />
             </NavLink>
            
            
<br />
          <br />
          </Col>

          

          

          
        </Row>
      </div>
    );
  
}

export default Footer;
