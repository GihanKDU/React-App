

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import AOS from 'aos';
import {   useEffect } from "react";





import {Container} from 'react-bootstrap';


export default function Team() {
  useEffect(() => {
     AOS.init({duration:1000});},[]);
   
    return (
   
        <div data-aos="fade-up"  className="custom_scale_1 team-background">
         <div className="heading_primary">Our Instructors</div>
        <Row>
        
 

            <Col data-aos="fade-up"  className="text-center" md={3}>
           
            <Image className="img_team" src='/team-1.jpg' alt={"team"}/>  
           <div>
                <div className="team-heading_text">Gihan Supun</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
           
           
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
           
                </Col>
                <Col data-aos="fade-up"  className="text-center" md={3}>
           
             <Image className="img_team" src='/team-2.jpg' alt={"teama"}/>  
           <div>
                <div className="team-heading_text">Jenny Anderson</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
            
     
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
           
                </Col>
                <Col data-aos="fade-up"  className="text-center" md={3}>
            
            <Image className="img_team" src='/team-3.jpg' alt={"teamb"}/>  
            <div>
                <div className="team-heading_text">Henry Jcob</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
       
           
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
       
                </Col>
                <Col  data-aos="fade-up"  className="text-center" md={3}>
       
            <Image className="img_team" src='/team-4.jpg' alt={"teamc"}/>  
<div>
                <div className="team-heading_text">Emma Flex</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
           
     
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
        
                </Col>
        

                </Row>
                </div>
             
    )
}
