import logo from './images/logo.png';
import './App.css';
import React, {useEffect} from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import Home from './Home.js'
import Projects from './Projects.js'
import AboutMe from './AboutMe.js'
import Contact from './Contact.js'


function App() {
    /*let closeMenu = function (e){
        if(e.target.closest('.navbar-toggler')){
            return false;
        }
        let menu = document.getElementById('basic-navbar-nav')
        if(menu.classList.contains('show')){
            menu.classList.remove('show')
        }
    }
    useEffect(() => {
        window.onload = function() {
            document.addEventListener('click',closeMenu)
        }
    });*/
    return (
            <div className="App">


                <div className="navigation">
                    <div className="navigation-sub">
                        <Navbar bg="light" expand="md" fixed="top" className="bg-light justify-content-end pr-0">
                            <Navbar.Brand href="/" className="flex-grow-2 text-right">
                                <img
                                    src={logo}
                                    className="d-inline-block align-top logo"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                <a className="anchor" name="home"/>
                <Home/>
                <a className="anchor" name="about"/>
                <AboutMe/>
                <a className="anchor" name="projects"/>
                <Projects/>
                <div id="project-details"/>
                <a className="anchor" name="contact"/>
                <Contact/>
                <footer>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                 className="bi bi-chevron-double-up" viewBox="0 0 18 18">
                                <path fillRule="evenodd"
                                      d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                <path fillRule="evenodd"
                                      d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </a>
                    </div>
                    {/*Copyright*/}
                    <div className="text-center p-3 bg-light">
                        © 2020 Copyright: <span className="text-dark">Priska Kohnen</span>
                    </div>
                </footer>
            </div>
    );
}

export default App;