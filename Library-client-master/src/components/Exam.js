import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Question from './Question'
import Submit from './Submit'


export default function Exam() {
    return (
        <div className="red">
        <Container>
            <Row>
                <Col md={12}>
                    <div className="exam-paper_topic-box text-center">
                        <div className="exam-paper_heading">G.C.E. Advanced Level (A/L)</div>
                    </div>
                </Col>

            </Row>
            <Container/>
            <Container>
                <Row className="exam-paper-sub_topic-box text-center">
                    <Col md={4}><div className="exam-paper_name flex-item">

                        <div>Paper  -</div>
                        <div>Biolgy</div>
                    </div>
                    </Col>
                    <Col md={4}><div className="exam-paper_time flex-item">

                        <div>Time  -</div>
                        <div>2 Hrs</div>
                    </div>
                    </Col>
                    <Col md={4}><div className="exam-paper_id flex-item">

                        <div>Student ID -</div>
                        <div>300 7077</div>
                    </div>
                    </Col>

                </Row>
            </Container>
            <Container>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Submit/>
        </Container>
        
          
        </Container>
        </div>
    )
}
