import react from './images/logo.svg';
import html from './images/html-5.svg';
import css from './images/css3.svg';
import sass from './images/sass-1.svg';
import javascript from './images/javascript-4.svg';
import jquery from './images/jquery.svg';
import bootstrap from './images/bootstrap-4.svg';
import python from './images/python-3.svg';
import django from './images/django-community.svg';
import wordpress from './images/wordpress-icon.svg';
import me from './images/B1F8E852-FC49-4C36-9C10-3E0C75671B29.JPEG';

import me2 from './images/IMG_63873.png';

import me3 from './images/me.png';
import './App.css';
import React from 'react'
import {Button, Col, Container, Image, Jumbotron, Row} from 'react-bootstrap';


function AboutMe() {
    return (
        <div className="AboutMe">
            <a name="about"/>
            <Container className="d-flex justify-content-center align-items-center aboutme-header">
                <h1>About Me</h1>
            </Container>
            <Jumbotron className="d-flex flex-xl-row flex-column justify-content-xl-start align-items-xl-center justify-content-center align-items-start img-container2 bg-beige">
                <div className="me-image"><Image src ={me3}/></div>
                <div className="about flex-grow-1">
                    <p>
                        <span>I'm a Berlin based full-stack Web Developer, building easy to use and user-centric webpages.</span><br/>
                        I currently work as a Django developer for TwoTickets.de in Berlin, Germany, which is where my
                        passion for design and development has its roots. During my studies in 2017 I joined the IT
                        team and finished various projects. Wandering between logical back-end problems and creativity
                        needing front-end issues brings me joy and keeps me at ease. I love visuals and animations,
                        what perhaps comes from my hobbies being drawing and painting, as well as the hours spent
                        playing video games and creating RPGs in my younger years.<br/>
                        Taking first steps in freelance works paved me the way to experience Shopify and WordPress, which
                        are fun to use, if you want something neat and quick. But building everything from scratch and
                        choosing your programming environment is even better!<br/>
                        Being at the beginning of my career I can't wait to learn new technologies and concepts and see,
                        where they take me to.
                    </p>
                </div>
            </Jumbotron>
            <Container className="d-flex justify-content-center align-items-center aboutme-header">
                <h2>Skills</h2>
            </Container>
            <Container>
                <Row className="p-3">
                    <Image src={html} className="skills left"/>
                    <Image src={css} className="skills left"/>
                    <Image src={javascript} className="skills right"/>
                </Row>
                <Row className="px-3">
                    <Image src={sass} className="skills right"/>
                    <Image src={bootstrap} className="skills left"/>
                    <Image src={jquery} className="skills right"/>
                </Row>
                <Row className="p-3">
                    <Image src={react} className="skills left"/>
                    <Image src={django} className="skills right"/>
                    <Image src={python} className="skills left"/>
                    <Image src={wordpress} className="skills right"/>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;