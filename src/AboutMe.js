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
import React, {useEffect} from 'react'
import {Button, Col, Container, Image, Jumbotron, Row} from 'react-bootstrap';

var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	// since there is a single target to be observed, there will be only one entry
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] > 0.6) {
            let skills = document.getElementsByClassName('skills')
            Array.from(skills).forEach((skill) => {
               skill.classList.add('animate__rollIn');
               skill.classList.add('animated');
            })
        }
	}
}, { threshold: [0.6] });






function AboutMe() {
    useEffect(() => {
        observer.observe(document.querySelector("#skillset"));
    })
    return (
        <div className="AboutMe">
            {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
            {/*    */}
            {/*</Container>*/}
            <Jumbotron className="img-container2 bg-beige">
                <h1>About Me</h1>
                <Container
                    className="d-flex flex-lg-row flex-column justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme">
                    <div className="me-image">
                        <Image src={me3}/>
                    </div>
                    <div className="about">
                        <p>
                            <span>I'm a Berlin based full-stack Web Developer, building easy to use and user-centric webpages.</span><br/>
                            Since 2017 I am working as a Django developer for TwoTickets.de in Berlin, Germany, which is where
                            my passion for design and development have their roots. I enjoy wandering between logical back-end
                            problems and creativity needing front-end issues. I love visuals and animations,
                            which originates probably in my hobbies being drawing and painting.<br/>
                            Having taken my first steps in freelance works paved me the way to experience Shopify and WordPress,
                            which
                            are fun to use, if you want something neat and quick. But building everything from scratch
                            and
                            choosing your programming environment is even better!<br/>
                            Being at the beginning of my career I can't wait to learn new technologies and concepts and
                            see,
                            where they take me to.
                        </p>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron id="skillset" className="skill-jumbotron">
                <h2>Skills</h2>
                <Container className="skill-container">
                    <Row className="p-3">
                        <Image src={html} className="skills animate__animated"/>
                        <Image src={css} className="skills animate__animated"/>
                        <Image src={javascript} className="skills animate__animated"/>
                    </Row>
                    <Row className="px-3">
                        <Image src={sass} className="skills animate__animated"/>
                        <Image src={bootstrap} className="skills animate__animated"/>
                        <Image src={jquery} className="skills animate__animated"/>
                    </Row>
                    <Row className="p-3">
                        <Image src={react} className="skills animate__animated"/>
                        <Image src={django} className="skills animate__animated"/>
                        <Image src={python} className="skills animate__animated"/>
                        <Image src={wordpress} className="skills animate__animated"/>
                    </Row>
                </Container>
                </Jumbotron>
        </div>
    );
}

export default AboutMe;