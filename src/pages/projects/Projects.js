import React from 'react';
import PropTypes from "prop-types";
import {Button, ButtonGroup, Card, CardGroup, Jumbotron, Carousel} from 'react-bootstrap';
import ProjectDetail from "./ProjectDetail";
import '../../App.css';
import './Projects.css';
import nutritionplanner from '../../images/nutritionplanner_small.png';
import jabe from '../../images/jabe_small.png';
import poilei from '../../images/poilei_small.png';
import glowingkids from '../../images/glowingkids_small.png';
import pscore from '../../images/pscore_small.png';
import pscoreedu from '../../images/pscoreedu_small.png';
import munscr from '../../images/munscr_small.png';
import modelunsf from '../../images/modelunsf_small.png';
import twotickets from '../../images/twotickets_small.png';
import webVisualizer from '../../images/webVisualizer_small2.png';
import fms from '../../images/fms_small.png';


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.cardsGroup = props.cardsGroup;
        this.cards = props.cards;
        this.state = {
            show: false,
            cardName: ''
        }
        this.handleClose = this.handleClose.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
        this.renderDetail = this.renderDetail.bind(this);
        this.listItems = this.listItems.bind(this);
        this.cardInner = this.cardInner.bind(this);
    }
    handleClose() {
        console.log('close')
        this.setState({show: false});
    }
    viewDetail(cardName){
        this.setState({show: true, cardName: cardName})
        // let show = true;
        // return new ProjectDetail({show:show, card:cardName})
    }
    renderDetail(){
        if(this.state.cardName === ''){ return null}
        return(<ProjectDetail show={this.state.show} card={this.state.cardName} closeAction={this.handleClose}/>)
    }
    listItems(){
        return this.cards.map((card, i) => (
                <Card key={i}>
                    {this.cardInner(card)}
                </Card>)
            )
    }
    cardInner(card){
        return(
            <React.Fragment>
                <Card.Img variant="top" src={card.img}/>
                <div className="card-overlay bottom">
                    <Card.Body>
                        <Card.Title>{card.cardTitle}</Card.Title>
                        <Card.Text>{card.cardText}</Card.Text>
                        <ButtonGroup className="justify-content-between">
                            {card.buttonWebsite ?
                                <Button variant="loading"
                                        href={card.buttonWebsite} target="_blank">View Page</Button>: null}
                            {card.buttonCode ?
                                <Button variant="loading"
                                        href={card.buttonCode} target="_blank">View Code</Button> : null}
                            <Button variant="loading"
                                    onClick={()=>this.viewDetail(card.name)}>View Details</Button>
                        </ButtonGroup>
                    </Card.Body>
                </div>
            </React.Fragment>
        )
    }
    render() {
        let controls = false;
        let indicators = false;
        if(this.cards.length > 1){
            controls = true;
            indicators = true;
        }
        return (

            <React.Fragment>

                <Jumbotron className="project-group">
                    <h2>{this.cardsGroup}</h2>
                </Jumbotron>
                <CardGroup className="flex-row justify-content-around align-items-start visible-md">
                    {this.listItems()}
                </CardGroup>
                <Carousel className="hidden-md" controls={controls} indicators={indicators}>
                    {this.cards.map((card, i) => (
                    <Carousel.Item key={i} as={Card}>
                        {this.cardInner(card)}
                    </Carousel.Item>)
                    )}
                </Carousel>
                {this.renderDetail()}
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
                cardsGroup: 'ThorDrive ',
                cards: [{
                    name: "webVisualizer",
                    img: webVisualizer,
                    cardTitle: "ThorDrive WebViz",
                    cardText: "A GUI for self-driving cars to check their status and simplify testing procedures.",
                    buttonWebsite: '',
                    buttonCode: ''
                },{
                    name: "FMS",
                    img: fms,
                    cardTitle: "ThorDrive Fleet Management System",
                    cardText: "A Fleet Management System to monitor and remotely control tug vehicles at the airport.",
                    buttonWebsite: '',
                    buttonCode: ''
                }
                ]
            },
            {
                cardsGroup: 'TwoTicktes.de GmbH',
                cards: [{
                    name: "twotickets",
                    img: twotickets,
                    cardTitle: "TwoTickets.de",
                    cardText: "A Django website, that sells memberships to its users. Members can win " +
                        "a pair of tickets for various events.",
                    buttonWebsite: 'https://twotickets.de',
                    buttonCode: ''
                },]
            },
            {
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
                        cardText: "A WordPress website about a Model United Nations about successful Korean reunification (build from scratch, maintaining).",
                        buttonWebsite: 'http://munscr.com',
                        buttonCode: ''
                    },
                    {
                        name: "modelunsf",
                        img: modelunsf,
                        cardTitle: "ModelUNSF",
                        cardText: "A WordPress website about a Model United Nations Strategic Framework Conference (build from scratch, maintaining).",
                        buttonWebsite: 'http://modelunsf.com',
                        buttonCode: ''
                    }]
            },
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
            },
            {
                cardsGroup: 'Freelance Projects',
                cards: [{
                    name: "jabe",
                    img: jabe,
                    cardTitle: "JABE",
                    cardText: "A plain HTML, CSS and jQuery restaurant website (build from scratch).",
                    buttonWebsite: 'http://jaberestaurant.de',
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
                        cardText: "A Shopify online shop that sells clothes for children.",
                        buttonWebsite: 'https://glowingkids.de',
                        buttonCode: ''
                    }]
            }
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