import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
// import girl from '../Images/Backgrounds/girl.png'
import ScrollAnimation from 'react-animate-on-scroll';

import {Container} from 'react-bootstrap';
import AOS from 'aos';
import {   useEffect } from "react";

export default function Tips() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        <Container data-aos="fade-up" className="custom_scale_1">
            <Row>
                <Col data-aos="fade-up"  md={7}>
                    <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                        <div className="heading_primary">Tips for Taking Online Classes</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Treat an online course like a “real” course.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Hold yourself accountable.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Practice time management.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Create a regular study space and stay organized.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Eliminate distractions.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Figure Out How You Learn Best.</div>
                    </ScrollAnimation>
                </Col>
                <Col data-aos="fade-up"  md={5}>
                    <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  
                    <Image className="why-img" src='/girl.png' alt={"gir"} />  </ScrollAnimation>
                </Col>


            </Row>

        </Container>
    )
}
