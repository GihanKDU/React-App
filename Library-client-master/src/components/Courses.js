import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Proceed from './Proceed';
import AOS from 'aos';
import {   useEffect } from "react";

export default function Courses() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        
          
            
                    <Row data-aos="fade-up" className="courses-wrapper_main">
                        <Col  md={4}>
                            <div className="courses-wrapper">
                                <Image className="courses-wrapper_img" src='/london1.jpg' alt={"london1"} />  
                            </div>
                            </Col>
                        <Col md={6}>
                            <div>
                                <div className="course-heading">2021 A/L Review lesson section for the month of October</div>
                                <div >
                                    <div className=" flex-item">
                                    <i class=" course-date-icon fas fa-calendar-week"></i>
                                    <div className="course-date ">2020.12.12</div>
                                    </div>
                                </div>
                                <div className="course-details">Review Review Lesson for October Introduction to Business and Defining Business Basic Concepts, Discussion of Related Question Patterns</div>
                                <div className="v-center ">
                                    <div className="lecturer-avatar"><Image className="lecturer-avatar_img" src='/team-1.jpg' alt={"team-1"} /></div>
                                    <div className="lecturer-name">Gihan Supun</div>
                                </div>
                            </div>
                            
                        </Col>
                        <Col md={2}>
                            <div className=" ">
                                <Proceed/>
                      
                            <Button className="btn-download" type="submit">Download</Button>
                                
                            </div>
                        </Col>
                        </Row>
            
            
        
    )
}

