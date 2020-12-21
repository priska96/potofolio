import nutritionplanner from './images/nutritionplanner.png';
import jabe from './images/jabe.png';
import poilei from './images/poilei.png';
import glowingkids from './images/glowingkids.png';
import pscore from './images/pscore.png';
import pscoreedu from './images/pscoreedu.png';
import munscr from './images/munscr.png';
import './App.css';
import React from 'react'
import {Button, ButtonGroup, Card, CardGroup, Container, Row} from 'react-bootstrap';

function Projects() {
    return (
        <div>
            <h1>Bachelor Thesis</h1>
            <CardGroup>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={nutritionplanner}/>
                    <Card.Body>
                        <Card.Title>Mealplan Generator</Card.Title>
                        <Card.Text>
                            A Django website that automatically generates user-specific weekly meal plans (build from scratch).
                        </Card.Text>
                        <ButtonGroup vertical>
                            <Button variant="primary" href="https://jaberestaurant.de">View Page</Button>
                            <Button variant="primary" href="https://github.com/priska96/nutritionplanner">View
                                Code</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </CardGroup>
            <h1>Freelance Projects</h1>
            <CardGroup>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={jabe}/>
                    <Card.Body>
                        <Card.Title>JABE</Card.Title>
                        <Card.Text>
                            A plain HTML, CSS and JavaScript build restaurant website (build from scratch).
                        </Card.Text>
                        <ButtonGroup vertical>
                            <Button variant="primary" href="https://jaberestaurant.de">View Page</Button>
                            <Button variant="primary" href="https://github.com/priska96/jaberestaurant">View
                                Code</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={poilei}/>
                    <Card.Body>
                        <Card.Title>Poilei</Card.Title>
                        <Card.Text>
                            A Shopify online shop (maintaining).
                        </Card.Text>

                        <ButtonGroup vertical>
                            <Button variant="primary" href="https://poilei.com">View Page</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={glowingkids}/>
                    <Card.Body>
                        <Card.Title>GlowingKids</Card.Title>
                        <Card.Text>
                            A Shopify online shop (maintaining).
                        </Card.Text>
                        <ButtonGroup vertical>
                            <Button variant="primary" href="https://glowingkids.de">View Page</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={pscore}/>
                    <Card.Body>
                        <Card.Title>PSCORE</Card.Title>
                        <Card.Text>
                            A WordPress website (maintaining).
                        </Card.Text>
                        <ButtonGroup vertical>
                            <Button variant="primary" href="http://pscore.org/home">View Page</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={pscoreedu}/>
                    <Card.Body>
                        <Card.Title>PSCORE EDU</Card.Title>
                        <Card.Text>
                            A WordPress website (maintaining).
                        </Card.Text>
                        <ButtonGroup vertical>
                            <Button variant="primary" href="http://edu.pscore.org/en/">View Page</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
                <Card style={{maxWidth: '18rem'}}>
                    <Card.Img variant="top" src={munscr}/>
                    <Card.Body>
                        <Card.Title>MUNSCR</Card.Title>
                        <Card.Text>
                            A WordPress website (build from scratch).
                        </Card.Text>
                        <ButtonGroup vertical>
                            <Button variant="primary" href="http://munscr.com">View Page</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Projects;