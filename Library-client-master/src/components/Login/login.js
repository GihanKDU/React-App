import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useState } from "react";

export default function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="btn-login" onClick={handleShow}>
                Log In
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
  </Button>



                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="flex-item">
                        <Button className="btn-login_google" type="submit">
                            <i class="icon-login fa fa-google"></i>Sign In with Google
  </Button>
                        <Button className="btn-login_facebook" type="submit">
                            <i class="icon-login fa fa-facebook"></i> Sign In with Facebook
  </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
