import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ScrollAnimation from 'react-animate-on-scroll';

import {Container} from 'react-bootstrap';
import AOS from 'aos';
import {   useEffect } from "react";

export default function About() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        <Container data-aos="fade-up"   className="custom_scale_1">
            <Row>
                <Col data-aos="fade-up"  md={5}>
                    <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  
                    <Image className="why-img" src='/meeting.jpg' alt={"meeting"} />  </ScrollAnimation>
                </Col>
                <Col data-aos="fade-up"  md={7}>


                    <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                        <div className="heading_primary">Why Choose Study Portal</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Get quick and guaranteed results with the best teachers.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>You can save a lot of money on our lessons & resources.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Our staff and teachers are always ready to help you.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Get quick and guaranteed results with the best teachers.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>You can save a lot of money on our lessons & resources.</div>
                        <div className="list_primary"><i class="fa fa-check list-icon"></i>Our staff and teachers are always ready to help you.</div>
                    </ScrollAnimation>
                </Col>


            </Row>

        </Container>
    )
}
