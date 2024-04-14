import react from '../../images/logo.svg';
import reactNative from '../../images/react-native.svg';
import html from '../../images/html-5.svg';
import css from '../../images/css3.svg';
import javascript from '../../images/javascript-4.svg';
import jquery from '../../images/jquery.svg';
import bootstrap from '../../images/bootstrap-4.svg';
import python from '../../images/python-3.svg';
import django from '../../images/django-community.svg';
import wordpress from '../../images/wordpress-icon.svg';
import ros from '../../images/ros_logo.svg';
import webpack from '../../images/webpack_logo.png';

import me3 from '../../images/me.png';
import '../../App.css';
import React from 'react'
import {Container, Image, Row} from 'react-bootstrap';
import { Jumbotron } from '../../components/Jumbotron';
import { useInView } from 'react-intersection-observer';



const AboutMe = ()=> {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.6,
      });
    return (
        <div className="AboutMe">
            <Jumbotron className="img-container2 bg-beige">
                <h1>About Me</h1>
                <Container
                    className="d-flex flex-lg-row flex-column justify-content-lg-start align-items-lg-center justify-content-center align-items-start aboutme">
                    <div className="me-image">
                        <Image src={me3}/>
                    </div>
                    <div className="about">
                        <p>
                            <span>
                                I'm a Berlin based full-stack Web Developer, building easy to use and user-centric web and mobile apps.
                            </span>
                            <br/>
                            From 2017 I worked as a Django developer for TwoTickets.de in Berlin, Germany for more than
                            three years. This is where my passion for design and development have their roots.
                            I enjoy wandering between logical back-end problems and creativity needing front-end issues.
                            I love visuals and animations, which originates probably in my hobbies being drawing and painting.<br/>
                            Having taken my first steps in freelance works paved me the way to experience Shopify and WordPress,
                            which are fun to use, if you want something neat and quick. But building everything from scratch
                            and choosing your programming environment is even better!
                            <br/>
                            I currently live in Seoul, South Korea, and work here as a Software Engineer for ThorDrive,
                            a company that develops technologies for autonomous cars.
                            Closing this chapter of my career and moving back to Berlin, I can't wait to learn new
                            technologies and concepts and see, where they take me to.
                        </p>
                    </div>
                </Container>
            </Jumbotron>
            <Jumbotron ref={ref} id="skillset" className="skill-jumbotron">
                <h2>Skills</h2>
                <Container className="skill-container">
                    <Row className="p-3">
                        <Image src={html} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={css} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={javascript} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={jquery} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={bootstrap} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                    </Row>
                    <Row className="px-3">
                        <Image src={react} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={reactNative} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={webpack} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={ros} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                    </Row>
                    <Row className="p-3">
                        <Image src={python} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={django} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                        <Image src={wordpress} className={!inView ? "skills animate__animated" : "skills animate__animated animate__rollIn animated" }/>
                    </Row>
                </Container>
                </Jumbotron>
        </div>
    );
}

export default AboutMe;