import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

export default function Question() {
    return (
        <Container className="exam-paper_question-box">
        <Row className="exam-paper_question">
        <Col md={12}>
            <div className="flex-item">
                <div>01 - </div>
            <div className="">What is the best programming language?</div>
            </div>
            
        </Col>
    </Row>
    <Row>
        <Col md={3}>
            <div className="flex-item">
                <Form.Check type="radio" aria-label="radio 1" />
                <div className="exam-paper_answer">Java Script</div>
            </div>

        </Col>
        <Col md={3}>
            <div className="flex-item">
                <Form.Check type="radio" aria-label="radio 1" />
                <div className="exam-paper_answer">Java Script</div>
            </div>

        </Col>
        <Col md={3}>
            <div className="flex-item">
                <Form.Check type="radio" aria-label="radio 1" />
                <div className="exam-paper_answer">Java Script</div>
            </div>

        </Col>
        <Col md={3}>
            <div className="flex-item">
                <Form.Check type="radio" aria-label="radio 1" />
                <div className="exam-paper_answer">Java Script</div>
            </div>

        </Col>
    
    </Row>
    </Container>
    )
}
