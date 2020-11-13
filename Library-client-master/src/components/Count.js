import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import {   useEffect } from "react";



export default function Count() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        
        <Row className="count-box">
            <Col data-aos="fade-up" md={3}>
               <div className="icon-box flex-item item-v_center">
                   <div className="icon-box_icon item-p_center"><i class="fa fa-book"></i></div>
                   <div className="icon-box_sub">
                       <div className="icon-box_value item-v_center">15</div>
                       <div className="icon-box_text">Courses</div>
                   </div>

               </div>
            </Col>
            <Col data-aos="fade-up" md={3}>
               <div className="icon-box flex-item item-v_center">
                   <div className="icon-box_icon item-p_center"><i class="fa fa-graduation-cap"></i></div>
                   <div className="icon-box_sub">
                       <div className="icon-box_value item-v_center">3056</div>
                       <div className="icon-box_text">Students +</div>
                   </div>

               </div>
            </Col>
            <Col data-aos="fade-up" md={3}>
               <div className="icon-box flex-item item-v_center">
                   <div className="icon-box_icon item-p_center"><i class="fa fa-university"></i></div>
                   <div className="icon-box_sub">
                       <div className="icon-box_value item-v_center">38</div>
                       <div className="icon-box_text">Lecturers +</div>
                   </div>

               </div>
            </Col>
            <Col data-aos="fade-up" md={3}>
               <div className="icon-box flex-item item-v_center">
                   <div className="icon-box_icon item-p_center"><i class="fa fa-globe"></i></div>
                   <div className="icon-box_sub">
                       <div className="icon-box_value item-v_center">164</div>
                       <div className="icon-box_text">Countries</div>
                   </div>

               </div>
            </Col>



      
        </Row>
    )
}
