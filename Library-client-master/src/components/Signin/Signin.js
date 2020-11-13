import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import  {  useState } from "react";

export default function Signin() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
      <Button className="btn-signin"  onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create  Account </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="email" placeholder="" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Re-Enter Password</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>

 
  <Button variant="primary" type="submit">
    Create Account
  </Button>
</Form> 
        </Modal.Body>
        <Modal.Footer>
          <div>If anythin put in here</div>
        </Modal.Footer>
      </Modal>
    </>
    )
}
