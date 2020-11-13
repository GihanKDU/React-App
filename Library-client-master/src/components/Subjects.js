import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router';
import {Container} from 'react-bootstrap';
import AOS from 'aos';
import {   useEffect } from "react";

export default function Subjects() {
    const router = useRouter();
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    
    return (

        <Container data-aos="fade-up">
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">   <div className="heading_primary">Popular Cources</div></ScrollAnimation>
            <Row>
                <Col data-aos="fade-up"  md={4}><ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                    <Card >
                        <Card.Img variant="top" className="" src='/london.jpg' alt={"london"} />
                        <Card.Body>
                            <Card.Title className="item-v_center">GCE O/L</Card.Title>

                            <div className="item-v_center">
                                <Button variant="primary" 
                                onClick={() => router.push(`/category`)}>Start Course</Button></div>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </Col>
                <Col data-aos="fade-up"  md={4}><ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                    <Card >
                        <Card.Img variant="top" className="" src='/london1.jpg' alt={"london1"} />
                        <Card.Body>
                            <Card.Title className="item-v_center">GCE A/L</Card.Title>

                            <div className="item-v_center"><Button variant="primary">Start Course</Button></div>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </Col>
                <Col data-aos="fade-up"  md={4}><ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                    <Card >
                        <Card.Img variant="top" className="" src='/london2.jpg' alt={"london2"} />
                        <Card.Body>
                            <Card.Title className="item-v_center">LONDON A/L</Card.Title>

                            <div className="item-v_center"><Button variant="primary">Start Course</Button></div>
                        </Card.Body>
                    </Card>
                </ScrollAnimation>
                </Col>





            </Row>
        </Container>


    )
}
