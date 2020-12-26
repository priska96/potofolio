import './App.css';
import React from 'react'
import {Button, Container, Form, Jumbotron} from 'react-bootstrap';

function Contact() {
    return (
        <div className="Contact">
            <a name="contact"/>
            <Container className="d-flex justify-content-center align-items-center aboutme-header">
                <h1>Contact</h1>
            </Container>
            <Jumbotron className="bg-beige">
                <p className="w-50 mx-auto">
                    If you want to get in touch with me, quickly fill out the form below. Let's talk about a project
                    collaboration or just say Hi to me! Of course you can also send me an email directly
                    to <a href="mailto:priskakohnen@gmail.com" className="highlight">priskakohnen@gmail.com</a>
                </p>
                    <Form className="w-50 mx-auto">
                        <Form.Row>
                            <Form.Group controlId="formEmail" className="flex-grow-1 mr-2">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formName" className="flex-grow-1 ml-2">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter full name"/>
                            </Form.Group>
                        </Form.Row>
                         <Form.Group controlId="formMessage">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                        <Button variant="loading" type="submit" className="btn-big">Submit
                        </Button>
                    </Form>
            </Jumbotron>
        </div>
    );
}

export default Contact;