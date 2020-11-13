import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import { Container } from 'react-bootstrap';

export default function Submit() {
    return (
        <Container>
        <Row>
            <Col md={12}>
                <div className="exam-paper_ending-box text-center">
                <Button variant="primary" type="submit"> Submit</Button>
                </div>
            </Col>

        </Row>
        </Container>
    )
}
