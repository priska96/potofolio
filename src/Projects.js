import nutritionplanner from './images/nutritionplanner.png';
import jabe from './images/jabe.png';
import poilei from './images/poilei.png';
import glowingkids from './images/glowingkids.png';
import pscore from './images/pscore.png';
import pscoreedu from './images/pscoreedu.png';
import munscr from './images/munscr.png';
import './App.css';
import React from 'react'
import PropTypes from "prop-types";
import {Button, ButtonGroup, Card, CardGroup, Container} from 'react-bootstrap';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.cardsGroup = props.cardsGroup;
        this.cards = props.cards;
    }

    render() {
        return (
            <div>
                <h2>{this.cardsGroup}</h2>
                <CardGroup className="justify-content-center">
                    {this.cards.map((card, i) => (
                        <Card key={i} style={{maxWidth: '18rem'}} className="item">
                            <Card.Img variant="top" src={card.img}/>
                            <div className="item-overlay bottom">
                                <Card.Body>
                                    <Card.Title>{card.cardTitle}</Card.Title>
                                    <Card.Text>{card.cardText}</Card.Text>
                                    <ButtonGroup vertical>
                                        <Button variant="primary" href={card.buttonWebsite}>View Page</Button>
                                        <Button variant="primary" href={card.buttonCode}>View
                                            Code</Button>
                                    </ButtonGroup>
                                </Card.Body>
                            </div>
                        </Card>)
                    )}
                </CardGroup>
            </div>
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
                    img: nutritionplanner,
                    cardTitle: "Mealplan Generator",
                    cardText: "A Django website that automatically generates user-specific weekly meal plans (build from scratch).",
                    buttonWebsite: 'https://jaberestaurant.de',
                    buttonCode: 'https://github.com/priska96/nutritionplanner'
                }]
            }, {
                cardsGroup: 'Freelance Projects',
                cards: [{
                    img: jabe,
                    cardTitle: "JABE",
                    cardText: "A plain HTML, CSS and JavaScript build restaurant website (build from scratch).",
                    buttonWebsite: 'https://jaberestaurant.de',
                    buttonCode: 'https://github.com/priska96/jaberestaurant'
                },
                    {
                        img: poilei,
                        cardTitle: "Poilei",
                        cardText: "A Shopify online shop (maintaining).",
                        buttonWebsite: 'https://poilei.com',
                        buttonCode: ''
                    },
                    {
                        img: glowingkids,
                        cardTitle: "GlowingKids",
                        cardText: "A Shopify online shop (maintaining).",
                        buttonWebsite: 'https://glowingkids.de',
                        buttonCode: ''
                    }]
            }, {
                cardsGroup: 'Internship at PSCORE',
                cards: [{
                    img: pscore,
                    cardTitle: "PSCORE",
                    cardText: "A WordPress website (maintaining).",
                    buttonWebsite: 'http://pscore.org/home',
                    buttonCode: ''
                },
                    {
                        img: pscoreedu,
                        cardTitle: "PSCORE EDU",
                        cardText: "A WordPress website (maintaining).",
                        buttonWebsite: 'http://edu.pscore.org/en/',
                        buttonCode: ''
                    },
                    {
                        img: munscr,
                        cardTitle: "MUNSCR",
                        cardText: "A WordPress website  (build from scratch).",
                        buttonWebsite: 'http://munscr.com',
                        buttonCode: ''
                    }]
            }
            , {
                cardsGroup: 'TwoTicktes GmbH',
                cards: [{
                    img: pscore,
                    cardTitle: "PSCORE",
                    cardText: "A WordPress website (maintaining).",
                    buttonWebsite: 'http://pscore.org/home',
                    buttonCode: ''
                },
                    {
                        img: pscoreedu,
                        cardTitle: "PSCORE EDU",
                        cardText: "A WordPress website (maintaining).",
                        buttonWebsite: 'http://edu.pscore.org/en/',
                        buttonCode: ''
                    },
                    {
                        img: munscr,
                        cardTitle: "MUNSCR",
                        cardText: "A WordPress website  (build from scratch).",
                        buttonWebsite: 'http://munscr.com',
                        buttonCode: ''
                    }]
            }
            ,

        ]
    }
};

function Projects() {

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center aboutme-header">
                <h1>My Projects</h1>
            </Container>
            {data.content.body.map(props => <Project
                cardsGroup={props.cardsGroup}
                cards={props.cards}/>
            )
            }
        </div>
    );
}

export default Projects;