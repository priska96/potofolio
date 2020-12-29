import './App.css';
import React from 'react'
import {Button, Container, Form, Jumbotron} from 'react-bootstrap';

function Contact() {
    return (
        <div className="Contact">
            <a name="contact"/>
            {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
            {/*    */}
            {/*</Container>*/}
            <Jumbotron className="bg-beige">

            <h1>Contact</h1>
                <Container>
                <p className="w-md-75 w-100 mx-auto">
                    If you want to get in touch with me, quickly fill out the form below. Let's talk about a project
                    collaboration or just say Hi to me! Of course you can also send me an email directly
                    to <a href="mailto:priskakohnen@gmail.com" className="highlight">priskakohnen@gmail.com</a>
                </p>
                    <Form className="w-md-75 w-100 mx-auto">
                        <Form.Row className="justify-content-between m-0">
                            <Form.Group controlId="formEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter full name"/>
                            </Form.Group>
                        </Form.Row>
                         <Form.Group controlId="formMessage">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter message"/>
                          </Form.Group>
                        <Button variant="loading" type="submit" className="btn-big">Submit
                        </Button>
                    </Form>
                    </Container>
            </Jumbotron>
        </div>
    );
}

export default Contact;