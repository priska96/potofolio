import logo from './images/logo.png';
import './App.css';
import React from 'react'
import {Button, Nav, Navbar, Jumbotron} from 'react-bootstrap';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './Home.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'
import Contact from './Contact.js'


function App() {
    return (
        <BrowserRouter>
            <div className="App">

                <div className="navigation">

                    <div className="navigation-sub">
                        <Navbar bg="light" expand="md" fixed="top" className="bg-light justify-content-end">
                            <Navbar.Brand href="/" className="flex-grow-2 text-right">
                                <img
                                src={logo}
                                className="d-inline-block align-top logo"
                                alt="React Bootstrap logo"
                              />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto flex-grow-1">
                                    <Nav.Link href="#home" className="flex-grow-1 text-center">Home</Nav.Link>
                                    <Nav.Link href="#about" className="flex-grow-1 text-center">About Me</Nav.Link>
                                    <Nav.Link href="#projects" className="flex-grow-1 text-center">Projects</Nav.Link>
                                    <Nav.Link href="#contact" className="flex-grow-1 text-center">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>

                {/*Set up the Router*/}
                <Home/>
                <AboutMe/>
                <Projects/>
                <Contact/>
            </div>
        </BrowserRouter>
    );
}

export default App;