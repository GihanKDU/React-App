import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";
import { useRouter } from 'next/router';



export default function Proceed() {
    const router = useRouter();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <Button className="btn-online" onClick={handleShow}>
           Online
        </Button>
  
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
          <Modal.Header closeButton>
            <Modal.Title>Start Your Exam</Modal.Title>
          </Modal.Header>
          <Modal.Body>2021 A/L Review lesson section for the month of October</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => router.push(`/paper`)}>
              Start Now
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
