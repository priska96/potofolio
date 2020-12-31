import nutritionplanner from './images/nutritionplanner_small.png';
import jabe from './images/jabe_small.png';
import poilei from './images/poilei_small.png';
import glowingkids from './images/glowingkids_small.png';
import pscore from './images/pscore_small.png';
import pscoreedu from './images/pscoreedu_small.png';
import munscr from './images/munscr_small.png';
import twotickets from './images/twotickets_small.png';
import './App.css';
import React from 'react'
import PropTypes from "prop-types";
import {Button, Modal, Card} from 'react-bootstrap';



const data = {
        nutritionplanner: {
            img: nutritionplanner,
            cardTitle: "Meal plan Generator",
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



class ProjectDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.show = props.show;
        this.card = props.card;
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(){
        this.setState({ show: false });
    }
    componentWillReceiveProps(nextProps) {
      this.setState({ show: nextProps.show });
    }

    render() {

            console.log(this.card)
        console.log(data[this.card])
        return (
            <Modal show={this.state.show} onHide={this.handleClose} className="modal-xl">
                <Modal.Header closeButton>
                  <Card.Title>{data[this.card].cardTitle}</Card.Title>
                </Modal.Header>
                <Card.Img variant="top" src={data[this.card].img}/>
                <Card.Body>
                    <Card.Text>{data[this.card].cardText}</Card.Text>
                </Card.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
        )
    }
}

ProjectDetail.propTypes = {
    show: PropTypes.bool,
    card: PropTypes.string
};

ProjectDetail.defaultProps = {
    show: false,
    card: 'nutritionplanner'
};
export default ProjectDetail;