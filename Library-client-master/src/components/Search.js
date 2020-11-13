import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import AOS from 'aos';
import {   useEffect } from "react";

export default function Search() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        <Row data-aos="fade-up"  className="search-header" >
            <Col md={5}>
            <Form>
                      

                            <input className="search-box" type="email" placeholder="Search your course" />

                      
                        </Form>
            </Col>
            <Col md={4}>
            <Button variant="primary">Search Course</Button>
            </Col>
            <Col md={3}>
          
            </Col>
        </Row>
    )
}
