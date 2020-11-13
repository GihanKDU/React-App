import React from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import AOS from 'aos';
import {   useEffect } from "react";

export default function Joinus() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        <div data-aos="fade-up" className="join-us-box">
        <div className="join-us-heading">Join Our Team</div>
        <div className="join-us-text" >Start your career as an lecture.Join with us.</div>
        <div className="item-p_center"><Button className="" variant="primary">Apply Now</Button></div>
   
        
        </div>
    )
}
