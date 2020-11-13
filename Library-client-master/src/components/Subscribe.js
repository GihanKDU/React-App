import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import letter from '../Images/Backgrounds/letter.png'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import AOS from 'aos';
import {   useEffect } from "react";


export default function Subscribe() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (

        <Row data-aos="fade-up"  className="box-news_letter ">

            <Col data-aos="fade-up"  className="item-v_center" md={5}>
                <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                    <Image className="letter-img" src='/letter.png' alt={"letter"} />  </ScrollAnimation>
            </Col>

            <Col data-aos="fade-up"  md={7}>
                <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                    <div className="news-letter-text_heading">Subscribe Our News Letters</div>
                    <Form.Group className="flex-item" controlId="formBasicEmail">

                        <Form.Control className="news-letter_input-box" type="email" placeholder="Enter email" />
                        <Button variant="primary" type="submit">
                            Subscribe
  </Button>

                    </Form.Group>
                </ScrollAnimation>
            </Col>

        </Row>
    )
}
