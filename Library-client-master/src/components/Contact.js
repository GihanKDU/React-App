import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import AOS from 'aos';
import {   useEffect } from "react";


export default function Contact() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        <Container data-aos="fade-up"  className="contact-form">
            <Row>
                <Col data-aos="fade-up"  md={5}>
                    <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                        <Image className="why-img" src='/call.png' alt={"gir"} />  </ScrollAnimation>
                </Col>
                <Col data-aos="fade-up"  md={7}>
                    <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                        <div className="heading_primary">Contact Us</div>
                        <Form>
                            <Form.Group className="flex-item" controlId="formBasicEmail">
                                
                                <Form.Control type="email" placeholder="First Name" />
                                <Form.Control className="contact-form-control" type="email" placeholder="Last Name" />
                         
                            </Form.Group>

                            <Form.Group >
                          
                                <Form.Control type="password" placeholder="Email" />
                            </Form.Group>
                            <InputGroup>
   
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
                           <div className="text-center"> <Button className="custom-form-btn" variant="primary" type="submit">
                                Submit
  </Button></div>
                        </Form>

                    </ScrollAnimation>
                </Col>



            </Row>

        </Container>
    )
}
