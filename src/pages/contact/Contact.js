import '../../App.css';
import React from 'react'
import {Button, Container, Form, Row} from 'react-bootstrap';
// import { Container} from 'react-bootstrap';
import { Jumbotron } from '../../components/Jumbotron';

function Contact() {
    return (
        <div className="Contact">
            {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
            {/*    */}
            {/*</Container>*/}
            <Jumbotron className="bg-beige">

            <h1>Contact</h1>
                <Container>
                <p className="w-md-75 w-100 mx-auto contact-text">
                    If you want to get in touch with me, quickly fill out the form below. Let's talk about a project
                    collaboration or just say Hi to me! Of course you can also send me an email directly
                    to <a href="mailto:priskakohnen@gmail.com" className="highlight">priskakohnen@gmail.com</a>
                </p>
                    <Form className="w-md-75 w-100 mx-auto" action="https://formspree.io/f/xzbkkyjn" method="POST">
                        <Row className="justify-content-between m-0">
                            <Form.Group controlId="formEmail" style={{width:"48%", marginBottom:"1rem"}} >
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" name="email" required={true} placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formName"  style={{width:"48%", marginBottom:"1rem"}} >
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name="name" required={true} placeholder="Enter full name"/>
                            </Form.Group>
                        </Row>
                         <Form.Group controlId="formMessage"  style={{marginBottom:"1rem"}} >
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" name="message" required={true} rows={3} placeholder="Enter message"/>
                          </Form.Group>
                        <Button variant="loading" type="submit">Submit</Button>
                    </Form>
                    </Container>
            </Jumbotron>
        </div>
    );
}

export default Contact;