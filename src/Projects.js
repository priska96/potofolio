import nutritionplanner from './images/nutritionplanner_small.png';
import jabe from './images/jabe_small.png';
import poilei from './images/poilei_small.png';
import glowingkids from './images/glowingkids_small.png';
import pscore from './images/pscore_small.png';
import pscoreedu from './images/pscoreedu_small.png';
import munscr from './images/munscr_small.png';
import twotickets from './images/twotickets_small.png';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {Button, ButtonGroup, Card, CardGroup, Carousel, Container, Jumbotron, Modal} from 'react-bootstrap';
import ProjectDetail from "./ProjectDetail";




const dataDetail = {
        nutritionplanner: {
            img: nutritionplanner,
            cardTitle: "Meal Plan Generator",
            cardText: "The goal of my Bachelor's Thesis was to create a system to generate meal plans. The " +
                "focus was set on the logic and not on the design, which is why the page has only minimal " +
                "styling to make it usable. Besides Django (Python) jQuery, CSS and Bootstrap was used to " +
                "implement this website.",
            cardAbstract: "Development and Evaluation of a System for automatic Generation of personalised " +
                "meal plans: Healthy nutrition is nowadays a highly valued topic. Meal plans are often used to " +
                "structure the food intake. The goal of this work is to develop and evaluate an algorithm to " +
                "recommend personalised meal plans. These meal plans support typical diets and eating habits " +
                "and provides a suitable nutrition intake. To create the meal plans and to choose the right " +
                "foods in a healthy measurement, an optimization problem will be set up and will be solved by " +
                "linear programming. Furthermore, a web service is set up and using the algorithm to generate, " +
                "based on the users input, these individual meal plans and to output them in a calendar " +
                "overview. Besides, a JSON structure will be introduced to simplify the integration of this " +
                "web service into other apps, by sending the data per HTTP requests.",

        },
        jabe: {
            img: jabe,
            cardTitle: "JABE",
            cardText: "A plain HTML, CSS and jQuery restaurant website (build from scratch).",
            buttonWebsite: 'https://jaberestaurant.de',
            buttonCode: 'https://github.com/priska96/jaberestaurant'
        },
        poilei: {
                img: poilei,
                cardTitle: "Poilei",
                cardText: "A Shopify online shop that sells Italian shoes (maintaining).",
                buttonWebsite: 'https://poilei.com',
                buttonCode: ''
            },
        glowingkids: {
                img: glowingkids,
                cardTitle: "GlowingKids",
                cardText: "A Shopify online shop that sells clothes for children (maintaining).",
                buttonWebsite: 'https://glowingkids.de',
                buttonCode: ''
        },
        pscore: {
                img: pscore,
                cardTitle: "PSCORE",
                cardText: "A WordPress website about human rights in North Korea and North Korean defectors (maintaining).",
                buttonWebsite: 'http://pscore.org/home',
                buttonCode: ''
        },
        pscoreedu: {
                img: pscoreedu,
                cardTitle: "PSCORE EDU",
                cardText: "A WordPress website to provide tutoring classes for North Korean defectors (maintaining).",
                buttonWebsite: 'http://edu.pscore.org/en/',
                buttonCode: ''
            },
    munscr: {
            img: munscr,
            cardTitle: "MUNSCR",
            cardText: "A WordPress website about a Model United Nations about successful Korean reunification (build from scratch).",
            buttonWebsite: 'http://munscr.com',
            buttonCode: ''

        },
    twotickets: {
        img: twotickets,
        cardTitle: "TwoTickets.de",
        cardText: "A Django website, that sells memberships to its users. Members can win " +
            "a pair of tickets for various events (maintaining).",
        buttonWebsite: 'https://twotickets.de',
        buttonCode: ''
    }
};

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.cardsGroup = props.cardsGroup;
        this.cards = props.cards;
        this.viewDetail = this.viewDetail.bind(this);
        this.state = {
            show: false
        }
    }

    viewDetail(cardName){
        this.setState({show: true})
        // let show = true;
        // return new ProjectDetail({show:show, card:cardName})
    }
    render() {
        let controls = false;
        let indicators = false;
        if(this.cards.length > 1){
            controls = true;
            indicators = true;
        }
        let show = this.state.show;
        return (

            <React.Fragment>

                <Jumbotron className="project-group">
                    <h2>{this.cardsGroup}</h2>
                </Jumbotron>
                <CardGroup className="flex-row justify-content-around align-items-start visible-md">
                    {this.cards.map((card, i) => (
                        <Card key={i}>
                            <Card.Img variant="top" src={card.img}/>
                            <div className="card-overlay bottom">
                                <Card.Body>
                                    <Card.Title>{card.cardTitle}</Card.Title>
                                    <Card.Text>{card.cardText}</Card.Text>
                                    <ButtonGroup className="justify-content-between">
                                        <Button variant="loading"
                                                    href={card.buttonWebsite} target="_blank">View Page</Button>
                                        {card.buttonCode ?
                                            <Button variant="loading"
                                                    href={card.buttonCode} target="_blank">View Code</Button> : null}
                                            <Button variant="loading"
                                                    onClick={this.viewDetail}>View Details</Button>
                                    </ButtonGroup>
                                </Card.Body>
                            </div>
                        </Card>)
                    )}
                </CardGroup>
                <Carousel className="hidden-md" controls={controls} indicators={indicators}>
                    {this.cards.map((card, i) => (
                    <Carousel.Item key={i} as={Card}>
                        <Card.Img variant="top" src={card.img}/>
                        <div className="card-overlay bottom">
                            <Card.Body>
                                <Card.Title>{card.cardTitle}</Card.Title>
                                <Card.Text>{card.cardText}</Card.Text>
                                <ButtonGroup  className="justify-content-between">
                                    <Button variant="loading"
                                                href={card.buttonWebsite} target="_blank">View Page</Button>
                                    {card.buttonCode ?
                                        <Button variant="loading"
                                                href={card.buttonCode} target="_blank">View Code</Button> : null}
                                        <Button variant="loading"
                                                onClick={this.viewDetail}>View Details</Button>
                                </ButtonGroup>
                            </Card.Body>
                        </div>
                        <ProjectDetail show={show} card={card.name}/>
                        {/*<Modal show={show}>*/}
                        {/*    <Modal.Header closeButton>*/}
                        {/*      <Modal.Title>{dataDetail['nutritionplanner'].cardTitle}</Modal.Title>*/}
                        {/*    </Modal.Header>*/}
                        {/*    <Modal.Body><p>{dataDetail['nutritionplanner'].cardText}</p></Modal.Body>*/}
                        {/*    <Modal.Footer>*/}
                        {/*      <Button variant="secondary">*/}
                        {/*        Close*/}
                        {/*      </Button>*/}
                        {/*    </Modal.Footer>*/}
                        {/*  </Modal>*/}
                    </Carousel.Item>)
                    )}
                </Carousel>
            </React.Fragment>
        )
    }
}

Project.propTypes = {
    cardsGroup: PropTypes.string,
    cards: PropTypes.array
};

Project.defaultProps = {
    cardsGroup: '',
    cards: []
};


const data = {
    content: {
        body: [
            {
                cardsGroup: 'Bachelor Thesis',
                cards: [{
                    name: "nutritionplanner",
                    img: nutritionplanner,
                    cardTitle: "Meal Plan Generator",
                    cardText: "A Django website that automatically generates user-specific weekly meal plans (build from scratch).",
                    buttonWebsite: '',
                    buttonCode: 'https://github.com/priska96/nutritionplanner'
                }]
            }, {
                cardsGroup: 'Freelance Projects',
                cards: [{
                    name: "jabe",
                    img: jabe,
                    cardTitle: "JABE",
                    cardText: "A plain HTML, CSS and jQuery restaurant website (build from scratch).",
                    buttonWebsite: 'https://jaberestaurant.de',
                    buttonCode: 'https://github.com/priska96/jaberestaurant'
                },
                    {
                        name: "poilei",
                        img: poilei,
                        cardTitle: "Poilei",
                        cardText: "A Shopify online shop that sells Italian shoes (maintaining).",
                        buttonWebsite: 'https://poilei.com',
                        buttonCode: ''
                    },
                    {
                        name: "glowingkids",
                        img: glowingkids,
                        cardTitle: "GlowingKids",
                        cardText: "A Shopify online shop that sells clothes for children (maintaining).",
                        buttonWebsite: 'https://glowingkids.de',
                        buttonCode: ''
                    }]
            }, {
                cardsGroup: 'Internship at PSCORE',
                cards: [{
                    name: "pscore",
                    img: pscore,
                    cardTitle: "PSCORE",
                    cardText: "A WordPress website about human rights in North Korea and North Korean defectors (maintaining).",
                    buttonWebsite: 'http://pscore.org/home',
                    buttonCode: ''
                },
                    {
                        name: "pscoreedu",
                        img: pscoreedu,
                        cardTitle: "PSCORE EDU",
                        cardText: "A WordPress website to provide tutoring classes for North Korean defectors (maintaining).",
                        buttonWebsite: 'http://edu.pscore.org/en/',
                        buttonCode: ''
                    },
                    {
                        name: "munscr",
                        img: munscr,
                        cardTitle: "MUNSCR",
                        cardText: "A WordPress website about a Model United Nations about successful Korean reunification (build from scratch).",
                        buttonWebsite: 'http://munscr.com',
                        buttonCode: ''
                    }]
            }
            , {
                cardsGroup: 'TwoTicktes.de GmbH',
                cards: [{
                    name: "twotickets",
                    img: twotickets,
                    cardTitle: "TwoTickets.de",
                    cardText: "A Django website, that sells memberships to its users. Members can win " +
                        "a pair of tickets for various events (maintaining).",
                    buttonWebsite: 'https://twotickets.de',
                    buttonCode: ''
                },]
            }
            ,

        ]
    }
};

function Projects() {

    return (
        <div className="Projects">
            <Jumbotron className="px-0 bg-transparent">
                <h1>My Projects</h1>
                {/*<Container className="d-flex justify-content-center align-items-center aboutme-header">*/}
                {/*    */}
                {/*</Container>*/}
                {data.content.body.map((props, i) =>
                    <Project key={i} cardsGroup={props.cardsGroup} cards={props.cards}/>
                )}
            </Jumbotron>
        </div>
    );
}

export default Projects;